# Feature Specification: Strictly PDF-Based Resume Content

**Feature Branch**: `003-strictly-pdf-resume-content`  
**Created**: 2026-04-20  
**Status**: Draft  
**Input**: User description: "我发现写的东西和我的简历有些不想关，有些内容被删除了 我只是提供一个url 让你参考风格 不是让你修改我简历信息 。请完全按照pdf 内容来"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Home Page Content Audit (Priority: P1)
As Fan Haotian, I want the home page to accurately represent my professional summary and core competencies exactly as described in my PDF so that visitors get the correct first impression.

**Why this priority**: Correcting the misinformation identified by the user.

**Independent Test**: Compare the home page hero section and feature grid against the "Work Experience" and "Personal Info" sections of the PDF.

**Acceptance Scenarios**:
1. **Given** the home page, **When** I check the hero section, **Then** I see the exact name "范浩天" and title "资深前端开发工程师" from the PDF.
2. **Given** the home page grid, **When** I read the descriptions, **Then** they reflect the high-level achievements mentioned in the PDF (e.g., SSR migration, automated testing, engineering optimization).

---

### User Story 2 - Resume Page Content Accuracy (Priority: P1)
As Fan Haotian, I want the resume details page to include every single bullet point and project detail from my PDF without any omissions or unauthorized modifications.

**Why this priority**: Fulfilling the user's explicit request for 100% fidelity to the PDF source.

**Independent Test**: Side-by-side comparison of the `resume.md` content and the source PDF for Education, Work Experience, and Project Experience sections.

**Acceptance Scenarios**:
1. **Given** the Work Experience section, **When** I view the bullets for "江苏博云科技股份有限公司", **Then** I see all four detailed bullets exactly as transcribed from the PDF.
2. **Given** the Project Experience section, **When** I check "Auto Test Platform", **Then** I see the specific technical details like "SSE", "Redux Toolkit (RTK Query)", and "Docker" as listed in the PDF.
3. **Given** the Skills section, **When** I review the categories, **Then** they align exactly with the "相关技能" section of the PDF.

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: System MUST replace all existing placeholder or incorrect content in `index.md` with verified data from `public/resume.pdf`.
- **FR-002**: System MUST rebuild `resume.md` to include 100% of the text from the PDF, organized into Education, Work Experience, Project Experience, and Skills sections.
- **FR-003**: System MUST NOT invent or hallucinate any details not present in the PDF.
- **FR-004**: System MUST maintain the "Professional/Clean" visual style (VitePress default with tweaks) but ensure the content is strictly as provided.
- **FR-005**: System MUST ensure the "Download PDF" functionality remains and points to the original `public/resume.pdf`.

### Key Entities
- **Resume Source (PDF)**: The source of truth (`public/resume.pdf`).
- **Web Resume**: The digital transcription (`index.md`, `resume.md`).

## Success Criteria *(mandatory)*

### Measurable Outcomes
- **SC-001**: 100% match between the text in `resume.md` and the text in `public/resume.pdf`.
- **SC-002**: Zero "hallucinated" project details or skills on either the home or resume pages.
- **SC-003**: Home page feature grid reflects the top technical achievements from the PDF accurately.

## Assumptions
- The user is satisfied with the current VitePress layout/theme but requires the data within it to be corrected.
- The `ExperienceCard` and `SkillGrid` components are capable of displaying the full level of detail from the PDF.
