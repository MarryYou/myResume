# Data Model: Strictly PDF-Based Resume Content

## Home Page Frontmatter (`index.md`)
```yaml
layout: home
hero:
  name: "范浩天"
  text: "资深前端开发工程师"
  tagline: "8年经验 | 专注于 React/Next.js 架构、AI 驱动开发与 3D 可视化"
  actions:
    - theme: brand
      text: 查看简历
      link: /resume
    - theme: alt
      text: 下载 PDF
      link: /resume.pdf
features:
  - title: 核心架构升级 (RDSec One Portal)
    details: 将技术栈从 React 迁移至 Next.js 15 (App Router) 实现 SSR，显著提升访问性能与用户体验。
  - title: AI 自动化插件开发
    details: 基于 TypeScript 与 Preact 开发 Figma 翻译插件，集成内部 AI 服务，赋能设计师高效协作。
  - title: 3D 可视化与工程化
    details: 熟练掌握 Cesium/Mars3D 技术；具备完善的 CI/CD (GitHub Actions, ArgoCD) 与容器化经验。
```

## Resume Page Content (`resume.md`)

### Education
- **南京工业大学** (2023.10-2025.7): 计算机科学与技术 | 本科 (非全)
- **常州信息职业技术学院** (2014.9-2017.7): 移动互联网应用技术 | 专科

### Work Experience
- **江苏博云科技股份有限公司** (2019.4-至今): 资深前端开发工程师
- **南京照泰信息技术有限公司** (2018.1-2019.4): 前端开发工程师

### Project Details (Strict Mapping)
- **RDSec One Portal**: Next.js 15, Ant Design 5, API Gateway integration.
- **Auto Test Platform**: Next.js 15, React 19, SSE, RTK Query.
- **Translator Plugin**: TypeScript, Preact, internal AI service.
- **String Portal**: React 17.x, Webpack, Docker, Jenkins CI/CD.

### Skills (Strict Mapping)
- **Frameworks**: React/Next.js, Vue 2/3, SSR/SSG, Cesium/Mars3D.
- **Tools**: Redux, Vuex, Zustand, Webpack, Vite, TypeScript.
- **AI/Backend**: Python/Node.js, LLM Tools (ChatGPT, DeepSeek, Cursor).
- **Ops**: Docker, Jenkins, GitHub Actions, ArgoCD, Nginx.
