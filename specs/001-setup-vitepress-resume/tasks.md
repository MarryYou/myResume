---
description: "Task list for Setup VitePress Resume Project implementation"
---

# Tasks: Setup VitePress Resume Project

**Input**: Design documents from `/specs/001-setup-vitepress-resume/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Tests**: Tests are NOT requested in the specification, so none are generated.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic dependency setup

- [x] T001 Initialize npm project in repository root (`npm init -y` or edit `package.json`)
- [x] T002 Install VitePress, Vue, and TypeScript dependencies (`npm install -D vitepress vue typescript`)
- [x] T003 Configure essential scripts (`dev`, `build`, `preview`) in `package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create basic directory structure (`.vitepress/theme/components`, `public`)
- [x] T005 Initialize basic VitePress configuration in `.vitepress/config.js` (including navigation for Home, Resume, AI)
- [x] T006 Setup custom theme entry point and styles in `.vitepress/theme/index.js` and `.vitepress/theme/style.css`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Project Initialization (Priority: P1) 🎯 MVP

**Goal**: Initialize a VitePress project with three distinct sections (Home, Resume Details, and AI)

**Independent Test**: Run `npm run dev` and navigate between Home (`index.md`), Resume (`resume.md`), and AI (`ai.md`) via the navbar.

### Implementation for User Story 1

- [x] T007 [P] [US1] Create initial Home page content in `index.md` (using home layout frontmatter)
- [x] T008 [P] [US1] Create initial Resume Details page content in `resume.md`
- [x] T009 [P] [US1] Implement `ExperienceCard.vue` component in `.vitepress/theme/components/ExperienceCard.vue`
- [x] T010 [P] [US1] Implement `SkillGrid.vue` component in `.vitepress/theme/components/SkillGrid.vue`
- [x] T011 [US1] Register custom components in `.vitepress/theme/index.js` (depends on T009, T010)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - AI Section Setup (Priority: P2)

**Goal**: Create a dedicated AI section in the resume.

**Independent Test**: Access the `ai.md` page and see the structured layout.

### Implementation for User Story 2

- [x] T012 [P] [US2] Create initial AI page content in `ai.md`

**Checkpoint**: At this point, the AI section is accessible.

---

## Phase 5: User Story 3 - Documentation & Hygiene (Priority: P1)

**Goal**: Provide comprehensive project documentation and correct repository hygiene

**Independent Test**: Verify `README.md` contains setup instructions and `git status` shows artifacts are ignored by `.gitignore`.

### Implementation for User Story 3

- [x] T013 [P] [US3] Create comprehensive `README.md` with setup and deployment guide
- [x] T014 [P] [US3] Create `.gitignore` file with patterns for `node_modules`, `.vitepress/dist`, and `.vitepress/cache`

**Checkpoint**: At this point, project hygiene is established.

---

## Phase 6: User Story 4 - GitHub Pages Deployment (Priority: P2)

**Goal**: Setup automated deployment to GitHub Pages via GitHub Actions

**Independent Test**: Push to `main` and verify GitHub Actions workflow triggers, builds, and successfully deploys.

### Implementation for User Story 4

- [x] T015 [US4] Create GitHub Actions deployment workflow in `.github/workflows/deploy.yml`

**Checkpoint**: All user stories should now be independently functional

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final refinements and verification

- [x] T016 [P] Final review of project structure and configurations for WCAG 2.1 compliance (check semantic HTML in components)
- [x] T017 [P] Run `npm run build` and `npm run preview` to verify final production readiness

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Independent of US1
- **User Story 3 (P1)**: Can start after Foundational (Phase 2) - Independent of US1/US2
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - Independent of US1/US2/US3 implementation, but requires US1 files to be present for a successful build/deploy test.

### Implementation Strategy

- **MVP First**: Complete Setup, Foundational, and User Story 1 & 3. This provides a locally viewable resume with proper documentation.
- **Incremental Delivery**: Add US2 for the AI section and US4 for public hosting.

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Verify local site functionality before committing US1
- Check GitHub repository settings for Pages after US4 implementation
