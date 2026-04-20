---
description: "Task list for Strictly PDF-Based Resume Content implementation"
---

# Tasks: Strictly PDF-Based Resume Content

**Input**: Design documents from `/specs/003-strictly-pdf-resume-content/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Manual side-by-side audit against PDF source.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Verifying source assets and environment

- [x] T001 [P] Verify `public/resume.pdf` remains unchanged and is the only content source

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Preparing verbatim text data

- [x] T002 Transcribe 100% of the text from `public/resume.pdf` into a temporary internal note for verbatim copying

**Checkpoint**: Foundation ready - verbatim source text prepared

---

## Phase 3: User Story 1 - Home Page Content Audit (Priority: P1) 🎯 MVP

**Goal**: Update home page with verbatim PDF content and milestoned feature grid

**Independent Test**: Verify `index.md` hero and features match PDF "Work Experience" and "Personal Info" exactly.

### Implementation for User Story 1

- [x] T003 [US1] Replace `index.md` frontmatter with verbatim Hero data (范浩天, 资深前端开发工程师)
- [x] T004 [US1] Update `index.md` feature grid with verbatim technical achievements (RDSec migration, Figma plugin, 3D Visualization)

**Checkpoint**: Home page content is 100% verified against PDF

---

## Phase 4: User Story 2 - Resume Page Content Accuracy (Priority: P1)

**Goal**: Rebuild resume page with 100% fidelity to the PDF source

**Independent Test**: Side-by-side comparison of `resume.md` and PDF for all sections.

### Implementation for User Story 2

- [x] T005 [P] [US2] Rebuild Education section in `resume.md` with verbatim text (Nanjing Technical University, Changzhou Institute)
- [x] T006 [P] [US2] Rebuild Work Experience section in `resume.md` with verbatim bullets (Jiangsu Bowen, Nanjing Zhaotai)
- [x] T007 [P] [US2] Rebuild Project Experience section in `resume.md` with verbatim technical details (RDSec One, Auto Test Platform, etc.)
- [x] T008 [P] [US2] Rebuild Skills section in `resume.md` using exact categories from PDF "相关技能"

**Checkpoint**: Resume page matches PDF text 100% without any omissions or unauthorized modifications

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Final audit and build verification

- [x] T009 [P] Final manual side-by-side audit of all pages against `public/resume.pdf`
- [x] T010 [P] Run `pnpm run build` to verify production readiness

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Phase 1
- **User Stories (Phase 3+)**: All depend on Phase 2 (verbatim transcription)
- **Polish (Final Phase)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Independent after Phase 2
- **User Story 2 (P1)**: Independent after Phase 2

### Implementation Strategy

- **MVP First**: Complete Phase 2 transcription and rebuild Home page (US1).
- **Incremental Delivery**: Rebuild full Resume page (US2).

---

## Notes

- Strictly follow the text provided in the binary `resume.pdf`.
- Ensure NO information from previous reference URLs or simplified summaries remains.
- Maintain the "Professional/Clean" visual style while ensuring data integrity.
