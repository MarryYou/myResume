# Feature Specification: Resume PDF Integration

**Feature Branch**: `002-resume-pdf-integration`  
**Created**: 2026-04-20  
**Status**: Draft  
**Input**: User description: "public 目录下 的 resume.pdf 是我的简历，请根据这份资源帮我构建 index 和 resume 记住 resume 需要支持pdf下载"

## Clarifications

### Session 2026-04-20
- Q: How should the home page (index.md) be structured to best reflect your professional profile? → A: Modern Minimalist (Feature Grid)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Home Page (Priority: P1)
As a visitor, I want to see a concise summary of Fan Haotian's professional profile on the home page so that I can quickly understand his expertise.

**Why this priority**: Core landing experience for the online resume.

**Independent Test**: Verify that the home page displays the hero section with name, title, and a feature grid highlighting key highlights extracted from the PDF.

**Acceptance Scenarios**:
1. **Given** the home page, **When** I view the hero section, **Then** I see "范浩天" and "资深前端开发工程师".
2. **Given** the home page, **When** I scroll down, **Then** I see a feature grid highlighting core competencies (e.g., "Enterprise Components", "AI Workflow").
3. **Given** the home page, **When** I look for a CTA, **Then** I see a button to view the full resume.

---

### User Story 2 - Resume Details Page (Priority: P1)
As a recruiter, I want to view the full work history and skills of Fan Haotian in a web-optimized format so that I can evaluate his qualifications.

**Why this priority**: Essential for providing the detailed content requested from the PDF.

**Independent Test**: Navigate to the resume page and verify all sections (Education, Work, Projects, Skills) are present and match the PDF content.

**Acceptance Scenarios**:
1. **Given** the resume page, **When** I scroll through the content, **Then** I see sections for "教育经历", "工作经历", "项目经历", and "相关技能".
2. **Given** the project details, **When** I read the descriptions, **Then** they match the technical accomplishments listed in the PDF (e.g., RDSec One Portal, Next.js 15).

---

### User Story 3 - PDF Download (Priority: P1)
As a hiring manager, I want to download the original PDF version of the resume from the resume page so that I can save it for offline review.

**Why this priority**: Explicit user requirement for PDF download support.

**Independent Test**: Click the download button on the resume page and verify the browser starts downloading `resume.pdf`.

**Acceptance Scenarios**:
1. **Given** the resume page, **When** I click the "下载 PDF 简历" button, **Then** the file `public/resume.pdf` is downloaded.

## Requirements *(mandatory)*

### Functional Requirements
- **FR-001**: System MUST extract and display content from `public/resume.pdf` into `index.md` and `resume.md`.
- **FR-002**: System MUST update the Home page (`index.md`) with a professional summary, hero section, and a feature grid highlighting core competencies.
- **FR-003**: System MUST update the Resume page (`resume.md`) with comprehensive details including education, work experience, projects, and skills using existing Vue components.
- **FR-004**: System MUST add a "Download PDF" action/button to the Resume page pointing to `/resume.pdf`.
- **FR-005**: System MUST ensure the multi-page navigation remains functional.

### Key Entities
- **Resume PDF**: The source of truth located at `public/resume.pdf`.
- **Resume Page**: The web representation of the resume content.

## Success Criteria *(mandatory)*

### Measurable Outcomes
- **SC-001**: The home page correctly reflects the personal details from the PDF.
- **SC-002**: The resume page contains 100% of the textual information from the PDF.
- **SC-003**: Clicking the download button successfully initiates a download of `resume.pdf`.
- **SC-004**: All links in the navigation bar work as expected.

## Assumptions
- The PDF content provided is accurate and up-to-date.
- The user wants the web version to be a digital representation of the PDF content, utilizing the established VitePress theme.
- The `ExperienceCard` and `SkillGrid` components are suitable for the content being added.
