---
description: "Task list for Resume PDF Integration implementation"
---

# Tasks: Resume PDF Integration

**Input**: Design documents from `/specs/002-resume-pdf-integration/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Manual verification per Quickstart guide.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Preparing the source asset and validation environment

- [x] T001 [P] Verify `public/resume.pdf` exists and is accessible
- [x] T002 [P] Prepare placeholder logo or asset at `public/logo.png` if required by frontmatter

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Essential data preparation

- [x] T003 Transcribe full project and work history text from `public/resume.pdf` into internal implementation notes

**Checkpoint**: Foundation ready - content extraction complete

---

## Phase 3: User Story 1 - Home Page (Priority: P1) 🎯 MVP

**Goal**: Update Home page with modern hero section and feature grid

**Independent Test**: Run `pnpm run dev` and verify "范浩天" and feature grid are visible on the home page.

### Implementation for User Story 1

- [x] T004 [US1] Update `index.md` frontmatter with new hero name, text, tagline, and actions (Download PDF)
- [x] T005 [US1] Add `features` grid to `index.md` frontmatter based on extracted core competencies

**Checkpoint**: Home page reflects professional profile and has PDF download CTA

---

## Phase 4: User Story 2 - Resume Details Page (Priority: P1)

**Goal**: Populate resume page with detailed work history and projects

**Independent Test**: Navigate to `/resume` and verify all sections match the PDF content.

### Implementation for User Story 2

- [x] T006 [P] [US2] Update `resume.md` content with Education history using `<ExperienceCard>`
- [x] T007 [P] [US2] Update `resume.md` content with Work Experience using `<ExperienceCard>`
- [x] T008 [P] [US2] Update `resume.md` content with Project Experience using `<ExperienceCard>`
- [x] T009 [P] [US2] Update `resume.md` content with Skills section using `<SkillGrid>`

**Checkpoint**: Resume details page is complete and formatted correctly

---

## Phase 5: User Story 3 - PDF Download (Priority: P1)

**Goal**: Ensure PDF download functionality works across the site

**Independent Test**: Click download links on Home and Resume pages; verify `resume.pdf` is saved locally.

### Implementation for User Story 3

- [x] T010 [US3] Add a "下载 PDF 简历" button or prominent link to the top of `resume.md` pointing to `/resume.pdf`

**Checkpoint**: PDF download is easily accessible from multiple entry points

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements and verification

- [x] T011 [P] Verify link integrity for all navigation and download buttons
- [x] T012 [P] Run `pnpm run build` to ensure content transcription didn't introduce build errors

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Phase 1
- **User Stories (Phase 3+)**: All depend on Phase 2 completion for content accuracy
- **Polish (Final Phase)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Independent after Phase 2
- **User Story 2 (P1)**: Independent after Phase 2
- **User Story 3 (P1)**: Depends on `resume.md` existing (US2) but can be implemented in parallel with US2 content updates

### Implementation Strategy

- **MVP First**: Complete Phase 2 transcription and User Story 1 & 3 for the Home page.
- **Incremental Delivery**: Populate the detailed Resume page (US2).

---

## Notes

- Each task refers to the specific content extracted from the binary `resume.pdf`.
- Use the established `ExperienceCard` and `SkillGrid` components to maintain consistency.
- Ensure the `lang: zh` configuration in `.vitepress/config.js` is respected in all content updates.
