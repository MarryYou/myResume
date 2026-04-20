# Data Model: Setup VitePress Resume Project

## Markdown Frontmatter

Each page (`index.md`, `resume.md`, `ai.md`) will use frontmatter for metadata and configuration.

### Common Frontmatter
```yaml
---
layout: doc
title: [Page Title]
description: [Page Description]
---
```

### Home Page (`index.md`)
```yaml
---
layout: home
hero:
  name: [Name]
  text: [Professional Title]
  tagline: [Brief Intro]
  actions:
    - theme: brand
      text: View Resume
      link: /resume
---
```

## Component Props (Vue)

### ExperienceCard.vue
- `role`: String (Job title)
- `company`: String (Company name)
- `period`: String (Date range)
- `description`: String (Markdown supported description)

### SkillGrid.vue
- `categories`: Array of objects:
  - `name`: String (Category name)
  - `skills`: String[] (List of skills)
