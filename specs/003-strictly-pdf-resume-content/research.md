# Research: Strictly PDF-Based Resume Content

## Technical Context Research

### Content Audit (PDF vs. Existing Site)
- **Findings**: The existing `index.md` and `resume.md` contain some inaccuracies or generalized text that doesn't fully capture the depth of the PDF. For example, specific project technologies like "RTK Query", "SSE", and "ArgoCD" were mentioned in the PDF but might have been simplified in previous iterations.
- **Decision**: Perform a verbatim transcription of all professional experience and project bullets from `public/resume.pdf`.

### VitePress Home Layout Features
- **Findings**: The `features` section in `index.md` frontmatter is the correct way to implement the "Modern Minimalist" style while keeping content in Markdown.
- **Decision**: Select 3 high-impact competency areas directly from the PDF (e.g., Enterprise Architecture, AI Workflow, 3D/GIS) for the feature grid.

### Component Suitability
- **Findings**: The `<ExperienceCard>` and `<SkillGrid>` components are already implemented and registered. They are flexible enough to handle the full text from the PDF.
- **Decision**: Reuse these components but ensure they are passed the exact, non-hallucinated strings from the PDF.

## Dependencies
- **vitepress**: ^1.0.0
- **vue**: ^3.4.0
- **typescript**: ^5.0.0

## Alternatives Considered
- **Direct PDF Embed**: Rejected again as it violates the project's "Content-First" constitution principle and provides poor UX compared to a native Markdown implementation.
