# 📝 技术博客

记录个人项目中的踩坑、决策与反思。

---

2026 年 2 月，公司宣布我"毕业"了。

还没缓过来，家里事情就一件接一件。索性在家待着，一边处理家事，一边把一直想搞的 AI 方向认真补了补。

说是"补"，其实就是硬啃。以前写 React、调 Webpack，脑子里全是组件树和状态管理。突然要理解 Embedding、RAG、Agent 循环、状态机编排这些概念，坦白说中间卡了很多次。对着 LangGraph 文档看了三天没看懂，最后是边抄代码边跑才慢慢明白的。

这个 TruthSeeker 项目就是自学的产物——一个用 LangGraph 搭的深度研究引擎。从前端到后端、从模型调用到部署，全是一个人折腾出来的。过程挺狼狈，但学到的东西很实在。

这组文章记录的是搭建全过程：踩过的坑、做过的决策、以及 POC 阶段来不及解决的妥协。不一定都对，但每一步都踩得真实。

---

## 🔍 TruthSeeker 深度解析系列

基于 **LangGraph 状态机** 驱动的 AI 研究管道，多维度拆解问题、并发检索全网信源、交叉验证事实一致性。

[GitHub 源码](https://github.com/MarryYou/truthseeker-website)

### 技术栈

| 层级 | 技术 |
|------|------|
| **后端** | Python 3.14 / FastAPI / LangGraph / SQLAlchemy 2.0 / Alembic |
| **前端** | Next.js 16 / React 19 / Ant Design 6 / Tailwind CSS 4 / Zustand |
| **数据** | PostgreSQL 16 / Redis 7 |
| **部署** | Docker Compose / Nginx / ARQ Worker |

### 核心亮点

- 🧠 **有状态 AI 研究管道** — LangGraph StateGraph 驱动，支持断点续传和任务恢复
- ⚖️ **"审判室"式交叉验证** — 原子声明提取 → 信源画像 → 三方共识 → 裁决，五级置信度
- ⚡ **三队列加权轮询调度** — fast_react(4) : expert_search(2) : pipeline(1)，Redis 优先级队列
- 🔐 **多租户安全** — Tenant/User 两级数据隔离，API Key AES-256 加密存储，SSRF 防护
- 📡 **SSE 实时流推送** — Redis PubSub + Stream 双通道，断线重连自动恢复
- 🔌 **搜索引擎插件系统** — 插件化架构，10 分钟扩展一个新引擎

### 架构角色

| 模块 | 职责 |
|------|------|
| 全栈架构设计 | 前后端分离架构、Nginx 反向代理、Docker 容器化 |
| LangGraph 管道编排 | 主图 + Agent 子图 + 核验子图，StateGraph 条件路由 |
| Worker 调度系统 | 三队列加权轮询、并发控制、Auto-Scaler 动态调整 |
| SSE 实时推送 | 图执行事件流 → Redis PubSub → 前端消费 |
| 多租户配置 | 三层配置模型（凭证层 / 资产层 / 策略层），精细化算力分配 |

---

**共 9 篇，建议按顺序阅读。**

1. **[我用 LangGraph 搭了个"反谣言"引擎](/blog/truthseeker/01-product-overview)**  
   产品全景：TruthSeeker 能做什么、三个速度档位、核心工作流

2. **[一个前端写 Python 后端，技术选型的纠结](/blog/truthseeker/02-core-architecture)**  
   系统架构总览、六大核心分层、数据模型设计

3. **[LangGraph 管道：我把研究拆成了 6 个工人](/blog/truthseeker/03-langgraph-pipeline)**  
   主图流程、Agent 子图、核验子图、ResearchState 状态管理

4. **[我给 AI 搭了个法庭，让它自己审自己](/blog/truthseeker/04-verify-subgraph)**  
   原子声明提取 → 信源画像 → 三方共识 → 裁决，五级置信度

5. **[从一条队到三条队：我被用户骂醒了](/blog/truthseeker/05-worker-scheduler)**  
   三队列加权轮询、并发控制、Auto-Scaler、分布式取消

6. **[用户的 API Key 存在我这，我比他还怕泄露](/blog/truthseeker/06-multitenant-security)**  
   多租户隔离、AES-256 加密、SSRF 防护、PBKDF2 密码哈希

7. **[十分钟加一个搜索引擎的重构过程](/blog/truthseeker/07-search-plugin)**  
   插件基类设计、注册中心、并发调度、去重编排

8. **[让用户盯着白屏等 5 分钟，这不行](/blog/truthseeker/08-sse-push)**  
   SSE 双通道实时推送、断线重连、事件类型设计

9. **[一行命令跑起来：Makefile 踩坑实录](/blog/truthseeker/09-deployment)**  
   Docker Compose 编排、Nginx 反向代理、一键部署

---

> 💡 每篇文章末尾都附有"已知不足"，诚实记录 POC 阶段的各种妥协和欠债。

---

### 关于这个项目

这个项目也是一次 vibe coding 的尝试。以前拿到需求就开写，现在习惯先用 Coze 聊清楚产品设计、用 Claude 过需求方案，把自己的角色从"闷头写代码"慢慢转变成了"想清楚再写、写完再审"。代码量没以前大了，但想的时间多了不少。

前后断断续续写了几个月，目前跑在一台云服务器上，日常处理几十次研究请求。TDD 写了 30 多个测试文件，配了 Logto OIDC 登录，搭了前后端全异步链路，Nginx SSE 缓冲踩过坑，Redis PubSub 和 Stream 的区别也终于搞懂了——都是翻文档、盯报错、一点点磨出来的。

下一步想往 Agent 方向深钻。现在管道里的 Agent 还比较"规矩"——能搜、能读、能推理，但始终在一个预设的流程里跑。我感兴趣的方向：多 Agent 各自负责一个研究维度然后互相 review；Agent 自己的长期记忆，不只是 LangGraph 的 thread checkpoint，而是跨会话的经验积累；以及 Agent 发现自己缺工具时能不能自己写代码造一个。

找工作优先，但这几个方向会陆续写出来——不会再停在 tutorial 级别。

对 AI 工程化感兴趣的话，欢迎聊聊。📞 `18251886173` &nbsp;&nbsp;|&nbsp;&nbsp; ✉️ `18251886173@163.com`
