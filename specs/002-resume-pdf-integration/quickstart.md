# Quickstart: Resume PDF Integration

## Verification Steps

### 1. Home Page Verification
- Open `http://localhost:5173/`.
- Check if the name "范浩天" and title "资深前端开发工程师" appear.
- Verify the feature grid displays the three core competencies (Components, AI, 3D).
- Verify the "下载 PDF" button exists in the hero section.

### 2. Resume Page Verification
- Navigate to `http://localhost:5173/resume`.
- Ensure Education, Work, Projects, and Skills sections are populated with data from the PDF.
- Check if the `ExperienceCard` and `SkillGrid` components render correctly.
- Add a "下载 PDF 简历" button/link at the top of the page and verify it works.

### 3. PDF Download
- Click any "Download PDF" link.
- Ensure the file `resume.pdf` is downloaded successfully.
