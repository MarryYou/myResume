# Data Model: Resume PDF Integration

## Page Metadata (Frontmatter)

### Home Page (`index.md`)
```yaml
layout: home
hero:
  name: "范浩天"
  text: "资深前端开发工程师"
  tagline: "8年经验 | 专注于 React/Next.js 架构、AI 驱动开发与 3D 可视化"
  image:
    src: /logo.png
    alt: Logo
  actions:
    - theme: brand
      text: 查看简历
      link: /resume
    - theme: alt
      text: 下载 PDF
      link: /resume.pdf
features:
  - title: 企业级组件库
    details: 具备多年 CRUD 自动化与组件工程化经验。
  - title: AI 驱动开发
    details: 擅长利用大语言模型与脚本提升开发效率。
  - title: 3D 可视化
    details: 熟练掌握 Cesium/Mars3D 等地理信息可视化技术。
```

### Resume Page (`resume.md`)
```yaml
layout: doc
title: 简历详情
description: 范浩天的个人简历详情
```

## Resume Content Structure

### Work Experience (Map to `<ExperienceCard>`)
- **Jiangsu Bowen Cloud Technology** (2019.4 - Present): Senior Frontend Engineer.
- **Nanjing Zhaotai Information Technology** (2018.1 - 2019.4): Frontend Engineer.

### Projects (Map to `<ExperienceCard>`)
- **RDSec One Portal**: Next.js 15, SSR, Ant Design 5.
- **Auto Test Platform**: Next.js 15, React 19, SSE.
- **Translator Plugin (Figma)**: TypeScript, Preact.
- **String Portal**: React 17, Webpack, Docker.

### Skills (Map to `<SkillGrid>`)
- **Frontend**: React/Next.js, Vue 2/3, SSR/SSG.
- **3D/GIS**: Cesium, Mars3D.
- **AI Tools**: ChatGPT, DeepSeek, Cursor.
- **DevOps**: Git, Nginx, Docker, GitHub Actions, ArgoCD.
