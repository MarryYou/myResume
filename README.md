# My Resume

基于 VitePress 构建的在线个人简历。

## 技术栈

- [VitePress](https://vitepress.dev/) - 静态网站生成器
- [Vue 3](https://vuejs.org/) - 组件框架
- [TypeScript](https://www.typescriptlang.org/) - 类型检查

## 目录结构

- `.vitepress/`: VitePress 配置及主题
- `components/`: 自定义 Vue 组件
- `index.md`: 首页
- `resume.md`: 简历详情
- `ai.md`: AI 相关研究与项目

## 快速开始

### 本地开发

安装依赖：
```bash
pnpm install
```

启动开发服务器：
```bash
pnpm run dev
```

### 生产构建

构建静态文件：
```bash
pnpm run build
```

本地预览构建结果：
```bash
pnpm run preview
```

## 部署

本项目支持通过 GitHub Actions 自动部署到 GitHub Pages。
推送代码到 `main` 分支后，部署流程会自动启动。
