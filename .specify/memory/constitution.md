<!--
Sync Impact Report:
- Version change: [ALL_CAPS] → 1.0.0
- List of modified principles:
  - [PRINCIPLE_1_NAME] → I. Content-First (Markdown)
  - [PRINCIPLE_2_NAME] → II. Modern Static Site (VitePress)
  - [PRINCIPLE_3_NAME] → III. Responsive & Accessible Design
  - [PRINCIPLE_4_NAME] → IV. Component-Based Architecture
  - [PRINCIPLE_5_NAME] → V. Automated Continuous Deployment
- Added sections: Core Principles, Technical Constraints, Quality Standards, Governance.
- Removed sections: None (placeholder sections filled).
- Templates requiring updates:
  - .specify/templates/plan-template.md (✅ updated)
  - .specify/templates/spec-template.md (✅ updated)
  - .specify/templates/tasks-template.md (✅ updated)
- Follow-up TODOs: None.
-->

# MyResume Constitution

## Core Principles

### I. Content-First (Markdown)
All resume content MUST be authored in Markdown to ensure portability, readability, and ease of version control. The content should be logically structured and decoupled from custom presentation logic wherever possible.

### II. Modern Static Site (VitePress)
The resume MUST be built as a high-performance static site using VitePress. This ensures fast load times, excellent SEO out of the box, and a developer-friendly authoring experience powered by Vite and Vue 3.

### III. Responsive & Accessible Design
The resume MUST be mobile-first and strictly adhere to accessibility standards (WCAG 2.1). It must provide a seamless reading experience across all devices, from small smartphones to large desktop monitors, and be compatible with screen readers.

### IV. Component-Based Architecture
Recurring or complex resume sections (e.g., skill grids, experience timelines, project cards) SHOULD be implemented as reusable Vue components. This approach ensures a maintainable, modular codebase and allows for rich interactivity where needed.

### V. Automated Continuous Deployment
The project MUST support automated build and deployment (CI/CD) workflows. Every change merged into the main branch should automatically trigger a build and update the live resume on its hosting platform (e.g., GitHub Pages).

## Technical Constraints

- **Framework**: VitePress (Vue 3, Vite).
- **Language**: TypeScript for all custom components and utility logic.
- **Styling**: Modern CSS (preferring CSS variables and Flexbox/Grid) with a focus on print-friendly layouts.
- **Deployment**: Automated via GitHub Actions to GitHub Pages or similar static hosting.
- **Performance**: Maintain a Lighthouse score of 90+ for Performance, Accessibility, and SEO.

## Quality Standards

- **Accuracy**: Content must be periodically reviewed for accuracy and zero typos.
- **Link Integrity**: All external links (social profiles, project repos, contact info) must be functional.
- **Printability**: The resume must include a dedicated print stylesheet or configuration to ensure it looks professional when saved as a PDF.
- **SEO & Metadata**: Proper Open Graph and Meta tags must be configured for professional presentation when sharing the link.

## Governance

The MyResume Constitution is the foundational document for this project and supersedes all other development practices. Any major architectural shifts or changes to these principles require a formal update to this document and a corresponding version bump.

All pull requests and major updates must be validated against these principles to ensure long-term maintainability and quality.

**Version**: 1.0.0 | **Ratified**: 2026-04-20 | **Last Amended**: 2026-04-20
