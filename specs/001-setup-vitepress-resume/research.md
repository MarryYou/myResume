# Research: Setup VitePress Resume Project

## Technical Context Research

### VitePress Initialization
- **Findings**: VitePress can be initialized via `npx vitepress init`. However, for a surgical setup, it's better to manually install `vitepress`, `vue`, and `typescript` and create the directory structure.
- **Decision**: Manually configure `package.json` and directory structure to ensure minimal and clean setup.

### GitHub Pages Deployment (User/Org Site)
- **Findings**: For a User/Org site (`<username>.github.io`), the repository name must match the site name. If not, it's a Project site. The user specified "User/Org Site", which implies no sub-path (`base: '/'`).
- **Decision**: Configure GitHub Actions to deploy to the `gh-pages` branch or use the modern "GitHub Actions" source for Pages. The modern approach is cleaner.

### Multi-page Structure in VitePress
- **Findings**: VitePress uses file-based routing. `index.md` is the root, `resume.md` is `/resume`, and `ai.md` is `/ai`.
- **Decision**: Create three files: `index.md`, `resume.md`, and `ai.md` in the root directory.

### Accessibility (WCAG 2.1)
- **Findings**: VitePress's default theme is highly accessible. Custom components must follow ARIA guidelines and maintain high contrast.
- **Decision**: Use semantic HTML in custom Vue components.

## Dependencies

| Dependency | Purpose | Version |
|------------|---------|---------|
| vitepress  | Static site generator | ^1.0.0 |
| vue        | Component framework | ^3.4.0 |
| typescript | Type safety | ^5.0.0 |
| shiki      | Syntax highlighting (built-in) | N/A |

## Alternatives Considered

- **Astro**: Great for static sites, but VitePress is more focused on documentation/content-first which fits a resume perfectly.
- **Next.js**: Overkill for a simple static resume.
