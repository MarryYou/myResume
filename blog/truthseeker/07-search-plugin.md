# 十分钟加一个搜索引擎的重构过程

这篇文章讲的是怎么把杂乱无章的搜索逻辑抽成一个插件系统。先交代一下技术背景。

### Python 的 asyncio 和 asyncio.gather

整个搜索系统是异步的——同时请求三个搜索引擎，而不是先等 A 搜完再让 B 搜。Python 3.4 开始引入的 `asyncio` 标准库就是为了解决这个问题。它提供了一个事件循环（Event Loop），让你写并发代码像写同步代码一样。

`asyncio.gather` 是里面最常用的并发原语之一——把一堆协程同时启动，等价于 JavaScript 的 `Promise.all`。典型用法：

```python
import asyncio

results = await asyncio.gather(
    baidu_search("2025年芯片出口数据"),
    tavily_search("chip export 2025"),
    google_search("semiconductor export ban"),
    return_exceptions=True  # 某个失败不影响其他
)
```

三个搜索引擎同时发出 HTTP 请求，Python 事件循环在等待网络响应时自动切换到其他任务。三个请求的并行耗时约等于最慢的那一个，而不是三个加起来。

`return_exceptions=True` 是这个方案的关键——如果不加这个参数，任何一个搜索引擎超时报错，`gather` 会直接抛出异常，另外两个引擎的已经返回的结果就丢了。加上之后，异常会被包装成 Exception 对象放在结果列表里，你可以单独处理失败的那个而不影响成功的。

### 持久层：SQLAlchemy 2.0 + asyncpg

搜索结果和用户配置存在 PostgreSQL 里，ORM 用的是 SQLAlchemy 2.0。Python 生态里 SQLAlchemy 是 ORM 的事实标准——它把 Python 类映射到数据库表、把对象操作翻译成 SQL。

2.0 版本最大的改进是**原生异步支持**。以前 SQLAlchemy 的异步要额外装第三方库，2.0 直接提供了 `sqlalchemy.ext.asyncio`，配合 `asyncpg` 驱动实现完整的异步链路：

```
FastAPI 路由 (async def) → SQLAlchemy AsyncSession → asyncpg → PostgreSQL
```

连接池配置也在 SQLAlchemy 层，用 `create_async_engine` 时指定：

```python
from sqlalchemy.ext.asyncio import create_async_engine

engine = create_async_engine(
    "postgresql+asyncpg://user:pass@localhost/db",
    pool_size=10,        # 连接池大小
    max_overflow=20,     # 池满后最多再开 20 个
    pool_pre_ping=True   # 拿连接前先 ping 一下，确保没被 PG 踢掉
)
```

`pool_pre_ping` 是个小事但很重要——PostgreSQL 默认会踢掉空闲超过一定时间的连接。如果不开启 pre_ping，连接池里拿出来的可能是一个已经被 PG 关掉的连接，查询直接报错。开了之后每次拿连接前会先发一条 `SELECT 1`，超轻量的活性检测。

## 一开始是硬编码的

最初版本特别粗暴——三个搜索引擎（博查、Tavily、知乎）各自写了一套调用逻辑，散落在不同的文件里。想加一个新引擎？得去四五个地方改代码。

```python
# 最初的丑代码大概长这样
if engine == "bocha":
    results = await bocha_search(query)
elif engine == "tavily":
    results = await tavily_search(query)
elif engine == "zhihu":
    results = await zhihu_search(query)
```

后来想加一个 Google Search，发现调度逻辑（并发调用、结果去重）和搜索引擎本身的逻辑混在一起。改调度影响引擎、改引擎影响调度——耦合得死死的。

忍不了，拆了。

## 拆成什么样子

现在整个搜索系统的结构是这样的：

```mermaid
flowchart TB
    O[Orchestrator<br/>调度编排器] --> R[Registry<br/>插件注册中心]
    R --> B[Bocha Plugin]
    R --> T[Tavily Plugin]
    R --> Z[Zhihu Plugin]
    R --> M[MyEngine Plugin<br/>你的新引擎]
    
    O -->|asyncio.gather<br/>并发调用| Plugins[已注册的搜索插件]
    O -->|跨引擎去重| Dedup[去重逻辑]
```

核心是三个组件：

**插件注册中心 (Registry)：** 一个全局字典，`引擎名 → 插件实例`。所有插件通过装饰器 `@plugin_registry.register()` 自注册，不用手动维护列表。

**搜索编排器 (Orchestrator)：** 从 Registry 拿到用户启用的插件列表，`asyncio.gather` 并发调用，最后跨引擎去重。单个引擎报错不影响其他。

**插件基类 (SearchPlugin)：** 所有引擎必须实现的抽象类，就三个方法：

```python
class SearchPlugin(ABC):
    @property
    def name(self) -> str:
        """引擎名称"""
    
    @property  
    def is_reader(self) -> bool:
        """是否内容读取插件"""
        return False
    
    async def search(self, query, api_key, **kwargs):
        """执行搜索，返回统一格式"""
```

## 加一个新引擎，三步

假设你要加一个 Google Search：

**第一步，写插件：**

```python
# backend/search/google.py
@plugin_registry.register()
class GoogleSearch(SearchPlugin):
    @property
    def name(self):
        return "google"

    async def search(self, query, api_key, **kwargs):
        # 调 Google Custom Search API
        response = await call_google_api(query, api_key)
        return [
            {"title": r.title, "url": r.url, 
             "snippet": r.snippet, "source": "google"}
            for r in response.items
        ]
```

**第二步，注册引擎名：**

```python
# backend/core/registry.py
VALID_SEARCH_ENGINES = frozenset({
    "tavily", "bocha", "zhihu", "google",  # 加一行
})
```

**第三步，UI 配 API Key。** 完事。编排器和去重逻辑一行不用改。

## 这个拆法省了什么

| 重构前 | 重构后 |
|--------|--------|
| 加引擎改 4-5 个文件 | 加引擎改 2 个文件（插件 + 注册名） |
| 调度逻辑和引擎耦合 | 调度和引擎独立，各自测试 |
| 引擎报错影响全局 | `asyncio.gather(return_exceptions=True)`，单引擎故障不阻塞 |
| 搜索结果重复 | 跨引擎 URL 去重统一处理 |

## 并发调度的细节

编排器里并发调用的核心就这一行：

```python
results = await asyncio.gather(
    *[plugin.search(query, api_key) for plugin in active_plugins],
    return_exceptions=True
)
```

`return_exceptions=True` 是关键——某个搜索引擎超时了、报错了，不会影响其他引擎返回结果。最坏情况是少了一个来源的结果，不会整个研究失败。

去重是简单规则：相同 URL 的保留第一个，相似标题的（编辑距离 < 阈值）去重。

## Reader 插件的预留

除了 Search 插件，基类里留了个 `is_reader` 属性。Search 插件根据关键词搜网页列表，Reader 插件读一个指定 URL 的完整内容——这是给 ReAct Agent 用的，Agent 搜到感兴趣的网页后，调 Reader 读全文再判断。

当前 Reader 插件还没正式实现，接口先占着，免得到时候重构。

---

> **已知不足**（POC 阶段）：插件系统只接了三个引擎，没有做过不同搜索引擎结果质量的 A/B 对比——比如博查的中文搜索结果比 Tavily 好吗？不知道，没评估。注册中心用的是全局字典，多 Worker 场景下没有做插件热加载（改了插件代码需要重启 Worker）。去重目前只靠 URL 精确匹配 + 标题相似度，没有内容级别的去重——两个不同 URL 的网页可能是互相抄袭的同一篇文章。这些在 POC 阶段我能接受，但如果要开放给更多用户用，搜索质量评估体系必须建。

---

> **上一篇**：[用户的 API Key 存在我这，我比他还怕泄露 ←](/blog/truthseeker/06-multitenant-security)
> **下一篇**：[让用户盯着白屏等 5 分钟，这不行 →](/blog/truthseeker/08-sse-push)