# 个人简历

<div class="resume-pdf-btn-container">
  <a href="/myResume/resume.pdf" class="custom-badge print-btn" target="_blank">
    📥 下载 PDF 简历
  </a>
</div>

## 基本信息

- **姓名**：范浩天
- **经验**：8 年全栈开发经验
- **电话**：18251886173
- **邮箱**：18251886173@163.com
- **GitHub**：[MarryYou](https://github.com/MarryYou)

***

## 💼 工作经历

<ExperienceCard 
  role="资深前端开发工程师"
  company="江苏博云科技股份有限公司"
  period="2019.04 - 2026.02"
  description="<ul><li>主导企业级统一门户（<strong>RDSec One Portal</strong>）前端架构升级，完成从 React 到 Next.js 15 (App Router) 的全栈技术迁移，实现 SSR 服务端渲染与 API Routes 统一管理，首屏加载时间从 3.2s 优化至 1.9s（↓约40%）；独立设计并实现 API 网关及微服务跨域方案，构建高效的前端数据流与权限管理体系。</li><li>主导自动化测试平台（<strong>ATP Frontend</strong>）全栈开发，基于 Next.js 15 + React 19 构建可视化测试管理与实时监控系统；实现测试用例拖拽编排与事务管理，通过 SSE 实时推送展示执行状态；深度参与后端执行服务架构设计，独立完成 API 交互层开发，保障高并发下系统稳定运行；使用 Python 编写测试数据生成脚本与 API Mock 服务，支撑自动化测试场景。</li><li>主导 <strong>StringPortal</strong> 前端应用重构，从 Django 模板切换至 React 17，实现前后端分离与模块化架构，设计翻译工作台、字符串管理和可视化编辑等核心功能，支撑翻译团队高效协作；主导 Figma 翻译辅助插件开发，基于 TypeScript + Preact 实现内部翻译功能集成，支持批量翻译与审校流程。</li><li>搭建 GitOps（GitHub Actions + ArgoCD/Kustomize）持续交付流水线，实现多环境自动化部署；建立代码审查与质量门禁机制，持续优化系统稳定性，累计修复 15+ 关键问题；负责基于 Vue.js 的遗留业务模块的日常 Bug 修复与稳定性维护，参与 Python 数据处理脚本开发以支撑运维数据分析。</li><li>担任前端技术负责人，负责技术选型与架构方案评审，指导 2-3 名初级开发，推动团队工程规范落地。</li></ul>"
/>

<ExperienceCard 
  role="前端开发工程师"
  company="南京熙泰信息技术有限公司"
  period="2018.01 - 2019.04"
  description="<ul><li>独立完成社区管理系统前后端开发（含富文本编辑器、评论系统及 admin 管理后台），支撑 200+ 内部用户日常内容创作与运营协作。</li><li>参与潜在用户发掘系统开发，通过引入用户行为权重（点击频次、停留时长、收藏偏好）和协同过滤策略优化推荐算法，使推荐准确率较此前提升约 20%（基于 A/B 测试结果）；主导前端性能优化，对代码分割、懒加载及缓存策略进行系统性调优，使核心操作（如用户搜索、推荐刷新）的端到端响应时间进入秒级以内，用户体验显著改善。</li></ul>"
/>

## 🚀 核心项目

<ExperienceCard 
  role="RDSec One Portal（综合管理服务门户前端重构）"
  company="前端架构师/技术负责人"
  period="2024 - 2026.02"
  description="<ul><li>基于 Next.js 15 (App Router) 完成从 React 到 SSR 的全栈架构迁移，通过 API Routes 统一管理服务端接口，实现服务端渲染与客户端交互的高效协同。</li><li>创新性采用 Next.js rewrites 解决微服务跨域问题，结合 Redux Toolkit Query 实现数据流与权限集中管理，利用 GrowthBook 特性开关提升迭代灵活性。</li><li>设计并封装 Ant Design 5 主题体系与 UI 组件库，覆盖表单、表格、弹窗等 12 个高频业务场景，统一多模块视觉规范。</li><li>搭建 GitHub Actions CI + ArgoCD/Kustomize GitOps 部署流水线，实现多环境自动化发布与配置管理。</li></ul>"
/>

<ExperienceCard 
  role="Auto Test Platform（自动化测试平台前端开发）"
  company="全栈开发工程师"
  period="2022 - 2026.02"
  description="<ul><li>基于 Next.js 15 (App Router) + React 19 构建自动化测试平台前端，提供可视化测试用例管理、执行调度与实时监控的交互界面。</li><li>实现测试事务管理与用例步骤拖拽排序功能，通过 SSE (Server-Sent Events) 实时推送测试执行状态，提升测试人员监控效率。</li><li>采用 Redux Toolkit (RTK Query) 管理复杂前端数据状态，攻克 SSO 认证与微服务模式下的数据一致性问题。</li><li>使用 Ant Design 5 + Tailwind CSS 构建响应式 UI，通过 Docker 容器化部署实现前后端一体化交付。</li></ul>"
/>

<ExperienceCard 
  role="Translator Plugin（Figma 翻译辅助插件）"
  company="前端开发工程师"
  period="2021 - 2026.02"
  description="<ul><li>基于 TypeScript + Preact 开发 Figma 翻译辅助插件，实现批量/单点翻译、翻译审校与数据管理等核心功能；设计高效内部通信机制与消息队列，确保高频文本操作下的快速响应。</li><li>实现 API 调用稳定机制（含错误重试与降级），保障外部服务交互可靠性；采用轻量级 UI 框架，确保插件在复杂场景中的高性能与高可用性。</li></ul>"
/>

<ExperienceCard 
  role="TruthSeeker（全栈 AI 深度研究引擎 · 个人项目）"
  company="全栈开发者"
  period="2026"
  description="<ul><li>独立开发 SaaS 多租户深度研究与信源核查引擎，基于 LangGraph 状态机驱动 AI 研究管道，实现多维度问题拆解、全网并发检索与事实交叉验证。</li><li>后端基于 FastAPI + LangGraph 构建有状态研究管线，支持断点续传与 SSE 实时推送；设计三级优先级 Worker 队列实现任务调度；采用 PostgreSQL + Redis + Docker Compose 全容器化部署。</li><li>前端基于 Next.js 16 + React 19 + Ant Design 构建，使用 Zustand 管理研究状态，实现声明验证卡片、思考链追踪面板、SSE 流式结果消费等 AI 交互组件。</li></ul>"
/>

## 🛠 专业技能

<SkillGrid :categories="[
  { name: '前端框架与库', skills: ['React', 'Next.js', 'SSR/SSG', 'App Router', 'Vue.js'] },
  { name: '状态管理与构建工具', skills: ['Redux', 'Zustand', 'Webpack'] },
  { name: '全栈技术能力', skills: ['JavaScript', 'TypeScript', 'Python', 'Node.js'] },
  { name: '工程化与部署实践', skills: ['Git', 'Nginx', 'Docker', 'CI/CD', 'SSR', 'SSE'] }
]" />

## 🎓 教育经历

<ExperienceCard 
  role="计算机科学与技术"
  company="南京工业大学 | 本科（自考）"
  period="2025.06"
  description=""
/>

<ExperienceCard 
  role="移动互联网应用技术"
  company="常州信息职业技术学院 | 专科"
  period="2014.9 - 2017.7"
  description=""
/>

<style>
.resume-pdf-btn-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
}
.custom-badge {
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1) !important;
  font-weight: 600;
  border-radius: 20px;
  text-decoration: none !important;
  font-size: 0.9rem;
  transition: all 0.2s;
}
.custom-badge:hover {
  background-color: var(--vp-c-brand-1);
  color: white !important;
}
</style>
