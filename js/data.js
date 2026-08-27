window.portfolioData = {
  personal: {
    name: "Lintao (Andy) Zhang",
    school: "The Ohio State University",
    degree: "Bachelor of Science in Computer and Information Science",
    minor: "Business minor",
    expectedGraduation: "May 2027",
    location: "Ohio, United States",
    email: "andy.zhang259107@gmail.com",
    github: "https://github.com/lintaozhang350",
    linkedin: "https://www.linkedin.com/in/andyzhang350",
    website: "https://lintaozhang350.github.io",
    resume: "assets/resume/Lintao_Zhang_Resume.pdf",
    subtitle: "Computer & Information Science @ The Ohio State University",
    positioning: "Software  ·  Data  ·  AI  ·  Business & Operations",
    intro: "Computer and Information Science student at The Ohio State University with a Business minor and experience across software development, data analytics, IT, research, and logistics operations. Through internships, research, coursework, and personal projects, I have worked with Python, SQL, JavaScript, Java, R, web technologies, data visualization, EDI, and enterprise systems. I am interested in technical roles that connect software, data, AI, and real-world business operations."
  },
  heroSkills: ["Python", "SQL", "Java", "JavaScript", "React", "TypeScript", "R", "Excel", "Tableau", "Power BI", "Data Analytics", "AI", "Git"],
  projects: [
    {
      title: "AI Customer Support Agent",
      category: "Full-stack AI",
      image: "assets/images/projects/ai-customer-support-dashboard.png",
      description: "Built a full-stack AI customer support chatbot for multi-turn customer interactions, including order tracking, returns, product Q&A, and human escalation workflows. Integrated retrieval-based policy search and persistent conversation data using Chroma and PostgreSQL.",
      tags: ["React", "TypeScript", "FastAPI", "OpenAI API", "PostgreSQL", "Chroma"],
      featured: true,
      links: [
        { label: "Live Demo", href: "https://lintao-ai-customer-support-demo.onrender.com" },
        { label: "GitHub", href: "https://github.com/lintaozhang350/ai-customer-support-agent" }
      ]
    },
    {
      title: "Android Logcat Debugging & Bug Reproduction",
      category: "Debugging",
      image: "assets/images/projects/android-logcat.svg",
      description: "Configured Android emulator environments and APK builds to reproduce application bugs under controlled test conditions. Captured and reviewed logcat traces to identify runtime exceptions, stack traces, and crash behavior, including reproduction of a documented K-9 Mail crash.",
      tags: ["Python", "Android", "ADB", "Emulator", "Logcat"],
      links: [
        { label: "Details", href: "assets/demos/android-logcat-details.html" }
      ]
    },
    {
      title: "Spotify Music Popularity Analysis",
      category: "Data analysis",
      image: "assets/images/projects/spotify/top-genres.png",
      description: "Analyzed a large Spotify dataset to study relationships between genres, audio features, and track popularity. Cleaned and structured the data, then built and evaluated a linear regression model using train/test splits, R², and RMSE.",
      tags: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib"],
      links: [
        { label: "Demo", href: "assets/demos/spotify-analysis.html" },
        { label: "Code", href: "assets/code/spotify-music-popularity-analysis.txt" }
      ]
    },
    {
      title: "Pulitzer Prize Data Analysis",
      category: "Exploratory analysis",
      image: "assets/images/projects/pulitzer/finalists-vs-circulation.png",
      description: "Analyzed FiveThirtyEight newspaper circulation data in R to explore circulation trends, publication outcomes, and relationships across the dataset. Cleaned missing and inconsistent values and created visualizations using ggplot2.",
      tags: ["R", "RStudio", "ggplot2", "dplyr", "tidyr", "EDA"],
      links: [
        { label: "Code", href: "assets/code/pulitzer-analysis.Rmd" },
        { label: "Demo", href: "assets/demos/pulitzer-analysis.html" }
      ]
    }
  ],
  experience: [
    {
      title: "EDI Specialist Intern — Logistics Planning",
      company: "Fuyao Glass America Inc.",
      location: "Dayton, OH",
      dates: "Jun. 2026 — Aug. 2026",
      description: "Returned to Fuyao for a second internship and supported logistics planning operations involving customer EDI orders, forecasts, delivery requirements, and shipping plans. Used Plex and Excel to monitor planning data, delivery performance, departmental KPIs, and order changes across production, warehouse, logistics, and customer-facing teams.",
      tags: ["EDI", "Logistics", "Excel", "Plex", "Data Analysis", "Operations"]
    },
    {
      title: "Information Technology Intern",
      company: "Fuyao Glass America Inc.",
      location: "Dayton, OH",
      dates: "May 2025 — Aug. 2025",
      description: "Worked with the IT department on network troubleshooting, enterprise systems, SQL-based reporting, and workflow automation. Analyzed network performance metrics, supported troubleshooting involving Cisco devices, and built SQL queries for Tableau dashboards used in HR reporting.",
      tags: ["IT", "SQL", "Tableau", "Cisco", "Troubleshooting", "Enterprise Systems"]
    },
    {
      title: "Research Assistant",
      company: "University of Minnesota Twin Cities",
      location: "Remote",
      dates: "Jan. 2026 — Present",
      description: "Supported research involving computer architecture, hardware design resources, and AI-assisted technical document analysis. Extracted and annotated figures, tables, and technical documentation, developed structured metadata for architecture and timing concepts, and collaborated with a PhD researcher to build training data for document understanding.",
      tags: ["Research", "AI", "Computer Architecture", "Data Annotation", "Technical Analysis"]
    },
    {
      title: "Student Experience Assistant",
      company: "Recreation and Physical Activity Center, The Ohio State University",
      location: "Columbus, OH",
      dates: "Apr. 2024 — Apr. 2025",
      description: "Supported daily recreational facility operations serving a large student population. Managed facility logistics, reservations, foot-traffic data, and sales information while helping maintain a welcoming environment.",
      tags: ["Operations", "Customer Service", "Data", "Logistics"]
    }
  ],
  education: {
    school: "The Ohio State University",
    degree: "B.S. in Computer and Information Science",
    minor: "Minor: Business",
    location: "Columbus, OH",
    dates: "Aug. 2023 — May 2027",
    coursework: [
      "Operating Systems",
      "Computer Networking and Internet Technologies",
      "Database Systems",
      "Artificial Intelligence",
      "Data Mining",
      "Information Security",
      "Data Structures and Algorithms",
      "Software Development and Design",
      "Operations Management",
      "Marketing",
      "Human Resources",
      "Accounting"
    ]
  },
  skills: [
    { name: "Programming & Data", items: ["SQL", "Python", "R", "JavaScript", "Java", "HTML/CSS"] },
    { name: "Frameworks / Development", items: ["React", "TypeScript", "FastAPI", "Git", "GitHub"] },
    { name: "Data Visualization", items: ["Tableau", "Power BI", "Matplotlib", "Seaborn"] },
    { name: "Business / Enterprise Tools", items: ["Microsoft Excel", "Plex", "EDI", "Google Analytics", "Jira", "Microsoft 365", "Google Workspace"] },
    { name: "Analytics", items: ["Data Cleaning", "ETL", "Dashboard Creation", "KPI Tracking", "Forecast Analysis", "Stakeholder Reporting"] },
    { name: "Systems", items: ["Troubleshooting", "Network Fundamentals", "Access Control Basics", "Disaster Recovery Concepts"] }
  ],
  reports: {
    enabled: false,
    items: [
      {
        title: "Analysis & report library",
        label: "Placeholder / Future work",
        image: "assets/images/projects/report-placeholder.svg",
        description: "A flexible home for future business analysis reports, logistics analytics, Excel dashboards, research reports, data visualizations, and case studies.",
        tags: ["Case studies", "Dashboards", "Research"],
        links: [
          { label: "View report", href: "#", placeholder: "A report link will be added here." },
          { label: "PDF", href: "#", placeholder: "A PDF link will be added here." }
        ]
      }
    ]
  }
};
