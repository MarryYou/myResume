# Implementation Plan: Strictly PDF-Based Resume Content

**Branch**: `003-strictly-pdf-resume-content` | **Date**: 2026-04-20 | **Spec**: [specs/003-strictly-pdf-resume-content/spec.md](spec.md)
**Input**: Feature specification from `/specs/003-strictly-pdf-resume-content/spec.md`

## Summary
This project focuses on auditing and correcting the existing website content to ensure 100% fidelity to the source `public/resume.pdf`. Any hallucinated details or artifacts from previous reference URLs will be removed and replaced with verbatim technical achievements and professional history from Fan Haotian's PDF.

## Technical Context
**Language/Version**: Markdown, Vue 3, TypeScript  
**Primary Dependencies**: `vitepress`, `vue`  
**Storage**: Static assets (`public/resume.pdf`)  
**Testing**: Manual side-by-side audit against PDF source.  
**Target Platform**: GitHub Pages  
**Project Type**: static-site  
**Performance Goals**: N/A (Content correction)  
**Constraints**: Absolute accuracy relative to PDF, Professional/Clean style.

## Constitution Check
- [x] Principle I (Content-First): Every line of content will be verified against the PDF.
- [x] Principle II (Modern Static Site): Rebuild using established VitePress structure.
- [x] Principle III (Responsive & Accessible): Maintain high accessibility while correcting data.
- [x] Principle IV (Component-Based): Pass correct props to `ExperienceCard` and `SkillGrid`.
- [x] Principle V (Automated CD): GitHub Actions will deploy the verified content.

## Project Structure

### Documentation (this feature)
```text
specs/003-strictly-pdf-resume-content/
├── plan.md              # This file
├── research.md          # Content audit and transcription strategy
├── data-model.md        # Verbatim frontmatter and content schema
└── quickstart.md        # Verification and manual audit guide
```

### Source Code (repository root)
```text
index.md                 # Updated with verbatim Hero/Features
resume.md                # Updated with verbatim Experience/Projects/Skills
public/
└── resume.pdf           # Source of truth
```

**Structure Decision**: Surgical update of content files within the existing VitePress framework.

## Complexity Tracking
| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | | |
