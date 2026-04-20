# Research: Resume PDF Integration

## Technical Context Research

### PDF Content Extraction
- **Findings**: The source file `public/resume.pdf` contains Fan Haotian's professional profile, education (Nanjing Technical University), work experience (Jiangsu Bowen, Nanjing Zhaotai), and projects (RDSec One Portal, Auto Test Platform, etc.).
- **Decision**: Manually transcribe the information into Markdown to ensure high-quality formatting and compatibility with VitePress components.

### Feature Grid Layout
- **Findings**: VitePress's default theme supports a `features` section in the home layout frontmatter. This allows for a multi-column grid of highlights.
- **Decision**: Use the `features` section in `index.md` to highlight core competencies like "Enterprise Components", "AI-Driven Development", and "3D Visualization".

### PDF Download Link
- **Findings**: VitePress serves static assets from the `public` directory at the root URL.
- **Decision**: Point the download link/button to `/resume.pdf`.

### Component Integration
- **Findings**: The project already has `ExperienceCard.vue` and `SkillGrid.vue`.
- **Decision**: Use these components in `resume.md` to present the work history and skills extracted from the PDF.

## Dependencies
- **vitepress**: Static site generator.
- **vue**: Component framework.
- **typescript**: Type safety for components.

## Alternatives Considered
- **Direct PDF Embed**: Rejected because it's not responsive and violates the "Content-First" principle.
- **Automated PDF Parsing**: Rejected as manual transcription ensures better control over the layout and content highlights.
