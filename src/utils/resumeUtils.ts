
export const resumeContent = `Mohamed Diaa – CV

📍 Personal Information
Full Name: Mohamed Diaa Atiaa
Phone: (+20) 1150315842
Location: New Cairo, Al-Shorouk City, Cairo, Egypt
LinkedIn: linkedin.com/in/mohamed-diaa-4b0727332
Portfolio: mohameddiaaatiaa.github.io/portfolio

🎓 Education
Current School: Confidential
Previous School: Madinaty Language School, New Cairo
Degree/Certificate: N/A (Currently a student)

📜 Certifications & Courses
Course Title                                          Provider    Grade
Developing Front-End Apps with React                  IBM         96%
Getting Started with Front-End and Web Development   IBM         96.66%
Crash Course on Python                               Google      95.5%
Developing Websites and Front-Ends with Bootstrap    IBM         95%
Introduction to Software Engineering                 IBM         92.8%
Using Python to Interact with the Operating System   Google      92.85%
Designing User Interfaces and Experiences (UI/UX)    IBM         84.16%
Software Developer Career Guide & Interview Prep     IBM         81.65%
Create Charts and Dashboards in Excel                Coursera    83.33%
Getting Started with Microsoft Excel                 Coursera    82.14%
Build a Free Website with WordPress                  Coursera    80%
Using Basic Formulas in Microsoft Excel              Coursera    100%

💼 Work Experience
Currently no formal work experience. Open to internships and freelance opportunities in software development, front-end engineering, or UI/UX design.
Current Title: Student / Freelancer / Intern (Open to opportunities)

🧠 Skills
Languages & Web: HTML5, CSS3, JavaScript, Python
Frameworks: React, Angular, Bootstrap
Tools & Design: Figma (UI/UX), Draw.io (wireframes/mind maps), Trello (planning/task management)
Productivity: Microsoft Excel, Google Docs/Sheets

✅ Strengths & Interests
Passionate about web development and UI/UX
Strong problem-solving and self-learning skills
Always eager to explore new technologies and frameworks

✅ Hobbies / About me
Interested in martial arts, train MMA.
Roller Blades / Skating in general.
Reading about mostly everything.`;

export const downloadResume = () => {
  const blob = new Blob([resumeContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Mohamed_Diaa_CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
