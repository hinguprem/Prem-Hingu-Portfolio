// ─── Portfolio Data — Prem Hingu (from Resume) ───
import premPhoto from '../assets/prem_photo.webp';

export const personalInfo = {
  name: "Prem Hingu",
  firstName: "Prem",
  lastName: "Hingu",
  photo: premPhoto,
  role: "Full Stack Developer",
  taglines: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
  ],
  bio: "Results-driven Full-Stack Developer with 3 internships and hands-on experience building production-ready web applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, and TypeScript.",
  bio2: "Proven ability to architect REST APIs, implement secure JWT authentication, integrate third-party services, and deliver client-facing projects on time. Passionate about clean code, scalable architecture, and real-world impact.",
  location: "Ahmedabad, Gujarat",
  email: "hinguprem007@gmail.com",
  phone: "+91 95129 22405",
  whatsapp: "919512922405",
  instagram: "https://instagram.com/hingu_prem_007",
  github: "https://github.com/hinguprem",
  linkedin: "https://linkedin.com/in/prem-hingu",
  resumeLink: "https://drive.google.com/file/d/1kTWj3CZ_vtdzIEjpLyIAAKFuAPGGntQl/view?usp=drive_link", // Navbar "Resume ↗" — opens Google Drive in new tab
  resumeFile: "/PremHingu_Resume.pdf", // Download Resume/CV buttons — downloads the PDF
  gmailLink: "https://mail.google.com/mail/?view=cm&to=hinguprem007@gmail.com", // Opens Gmail compose
  availableForWork: true,
};

export const stats = [
  { label: "Internships", value: "3" },
  { label: "Projects Built", value: "15+" },
  { label: "REST APIs Built", value: "15+" },
  { label: "Technologies", value: "12+" },
];

export const skills = [
  // Languages
  { name: "JavaScript (ES6+)", category: "Frontend", level: 70, icon: "js" },
  { name: "TypeScript", category: "Frontend", level: 58, icon: "ts" },
  { name: "HTML5", category: "Frontend", level: 95, icon: "html" },
  { name: "CSS3", category: "Frontend", level: 83, icon: "css" },
  // Frontend
  { name: "React.js", category: "Frontend", level: 88, icon: "react" },
  { name: "Next.js", category: "Frontend", level: 68, icon: "next" },
  { name: "Tailwind CSS", category: "Frontend", level: 78, icon: "tailwind" },
  // Backend
  { name: "Node.js", category: "Backend", level: 75, icon: "node" },
  { name: "Express.js", category: "Backend", level: 69, icon: "express" },
  { name: "REST API Design", category: "Backend", level: 77, icon: "api" },
  { name: "JWT Auth", category: "Backend", level: 72, icon: "jwt" },
  { name: "Socket.io", category: "Backend", level: 70, icon: "socket" },
  // Database
  { name: "MongoDB", category: "Database", level: 82, icon: "mongo" },
  { name: "MySQL", category: "Database", level: 65, icon: "mysql" },
  // Tools
  { name: "Git & GitHub", category: "Tools", level: 88, icon: "git" },
  { name: "Postman", category: "Tools", level: 80, icon: "postman" },
  { name: "Cloudinary", category: "Tools", level: 78, icon: "cloud" },
  { name: "Vercel", category: "Tools", level: 78, icon: "vercel" },
  { name: "VS Code", category: "Tools", level: 92, icon: "vscode" },
];

export const projects = [
  {
    id: 1,
    title: "BorrowBuddy",
    description:
      "A peer-to-peer rental marketplace serving dual roles (Borrower/Renter) with a seamless role-switching UX. Features automated booking engine with date-collision detection across 15+ API endpoints, Cloudinary photo uploads for 'Proof of Condition', and Socket.io real-time in-app messaging.",
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Socket.io", "Cloudinary", "JWT"],
    github: "https://github.com/hinguprem/borrowbuddy",
    live: "https://borrow-buddy-ten.vercel.app/",
    featured: true,
    category: "Full Stack",
    gradient: "from-blue-900/50 to-indigo-900/50",
    image: "/project-borrowbuddy.webp",
  },
  {
    id: 2,
    title: "WhatsApp Scheduler",
    description:
      "WhatsApp automation platform enabling authenticated users to schedule individual, group, and status messages with media attachments via QR-based login. Features timezone-aware delivery, persistent session recovery, auto-reconnect, and real-time failure alerts via Socket.io.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Socket.io", "whatsapp-web.js"],
    github: "https://github.com/hinguprem/WS-Scheduler",
    live: "https://ws-scheduler.vercel.app/",
    featured: false,
    category: "Full Stack",
    gradient: "from-green-900/50 to-emerald-900/50",
    image: "/project-whatsapp.webp",
  },
  {
    id: 3,
    title: "Tip Top Tailor — Client Site",
    description:
      "Fully responsive business website for a real tailoring shop client, delivering a professional online presence from scratch. Built with vanilla HTML, CSS, and JavaScript — deployed live on GitHub Pages with zero hosting cost.",
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    github: "https://github.com/hinguprem/tip-top-tailor",
    live: "https://hinguprem.github.io/TIP-TOP-TAILOR/",
    featured: false,
    category: "Frontend",
    gradient: "from-amber-900/50 to-orange-900/50",
    image: "/project-tiptop.webp",
  },
];

export const experience = [
  {
    id: 1,
    company: "Sparks To Ideas",
    role: "Full-Stack Developer Intern (MERN Stack)",
    duration: "Jan 2026 – Apr 2026",
    location: "Ahmedabad, Gujarat",
    type: "Internship",
    description: [
      "Architected and delivered BorrowBuddy, a full-featured peer-to-peer rental marketplace, as the sole developer within a 4-month internship timeline",
      "Designed 15+ REST API endpoints using Node.js and Express.js with MongoDB, supporting dual user roles (Borrower/Renter) and complex booking logic",
      "Implemented JWT-based authentication and session management, securing all protected routes and user data across the platform",
      "Integrated 3 third-party APIs — Cloudinary (image uploads), Socket.io (real-time chat), and a date-collision booking engine — reducing scheduling conflicts to zero",
      "Delivered a fully responsive frontend using Next.js and Tailwind CSS, ensuring seamless experience across all screen sizes",
    ],
    techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary", "JWT", "Tailwind CSS"],
  },
  {
    id: 2,
    company: "Tech Nishal",
    role: "Front-End Developer Intern",
    duration: "Jul 2025 – Aug 2025",
    location: "Ahmedabad, Gujarat",
    type: "Internship",
    description: [
      "Built 10+ reusable React.js UI components with clean prop interfaces, reducing code duplication by approximately 30% across the project",
      "Managed complex application state using React Hooks (useState, useEffect, useContext), improving component performance and maintainability",
      "Collaborated with a 3-member team to debug and optimize components, contributing to faster page load and a smoother user experience",
    ],
    techStack: ["React.js", "React Hooks", "JavaScript", "CSS3", "Git"],
  },
  {
    id: 3,
    company: "24JS Infinity LLP",
    role: "Web Development Intern",
    duration: "Jun 2022 – May 2023",
    location: "Ahmedabad, Gujarat",
    type: "Internship",
    description: [
      "Developed and maintained 5+ dynamic web modules using PHP and MySQL, including user login systems, admin dashboards, and form handling pipelines",
      "Designed normalized relational database schemas and wrote optimized SQL queries, improving data retrieval speed for high-frequency operations",
      "Ensured secure backend functionality including input validation, SQL injection prevention, and session handling across all delivered features",
    ],
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
  },
];

export const certifications = [
  { title: "Build Your Own Generative AI Model", issuer: "NXT Wave", date: "Mar 2024" },
  { title: "Full-Stack Development with Node.js & MongoDB", issuer: "Tops Technologies", date: "Dec 2023" },
  { title: "Responsive Web Design & Front-End Development", issuer: "Tops Technologies", date: "Dec 2023" },
  { title: "Trends & Future of Full-Stack Development", issuer: "Tops Technologies", date: "Feb 2024" },
  { title: "Entrepreneurship & Digital Innovation", issuer: "SAL Education", date: "Apr 2025" },
  { title: "Participant, Ideathon 2024", issuer: "SAL Education", date: "2024" },
];

export const education = [
  {
    degree: "Bachelor of Engineering — Computer Engineering",
    institution: "SAL Institute of Technology & Engineering Research",
    duration: "2023 – 2026",
    cgpa: "7.77 / 10 ",
  },
  {
    degree: "Diploma — Information Technology",
    institution: "SAL Institute of Diploma Studies",
    duration: "2020 – 2023",
    cgpa: "7.99 / 10",
  },
];

export const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];
