# Quickstart: Setup VitePress Resume Project

## 1. Local Development

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 2. GitHub Pages Setup

1. Push your code to the `main` branch on GitHub.
2. In the GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The deployment will automatically trigger upon push via `.github/workflows/deploy.yml`.

## 3. Site Navigation

The site is structured with a multi-page layout. The navigation bar (configured in `.vitepress/config.js`) will allow switching between:
- **Home**: `index.md`
- **Resume**: `resume.md`
- **AI**: `ai.md`
