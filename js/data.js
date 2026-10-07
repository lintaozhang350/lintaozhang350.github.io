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
    subtitle: "Computer & Information Science @ The Ohio State University · Business minor",
    positioning: "Software  ·  Data  ·  AI  ·  Business Analytics & Operations",
    intro: "Computer and Information Science student at The Ohio State University with a Business minor. My experience connects software, data, and AI with business operations through logistics planning, customer EDI orders, enterprise IT, HR reporting, and research. I have worked with Python, SQL, JavaScript, Java, R, web technologies, data visualization, and enterprise systems. I’m interested in roles where technical skills and business understanding come together to support analysis, reporting, customer service, and everyday operations."
  },
  heroSkills: ["Python", "SQL", "Java", "JavaScript", "React", "TypeScript", "R", "Excel", "Tableau", "Power BI", "Data Analytics", "AI", "Git", "Business Operations", "KPI Reporting"],
  projects: [
    {
      title: "AI Customer Support Agent",
      category: "Full-stack AI",
      image: "assets/images/projects/ai-customer-support-dashboard.png",
      description: "Built a full-stack AI chatbot for multi-turn customer service workflows, including order tracking, returns, product Q&A, and handoffs to human support. Connected these business workflows with retrieval-based policy search and persistent conversation data using Chroma and PostgreSQL.",
      tags: ["React", "TypeScript", "FastAPI", "OpenAI API", "PostgreSQL", "Chroma", "Customer Service"],
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
      description: "Analyzed a large Spotify dataset to study relationships between genres, audio features, and track popularity. Cleaned and structured the data, then built and evaluated a linear regression model using train/test splits, R², and RMSE. Presented genre comparisons and prediction results in charts, connecting the analysis to questions about content performance.",
      tags: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Data Storytelling"],
      links: [
        { label: "Demo", href: "assets/demos/spotify-analysis.html" },
        { label: "Code", href: "assets/code/spotify-music-popularity-analysis.txt" }
      ]
    },
    {
      title: "Pulitzer Prize Data Analysis",
      category: "Exploratory analysis",
      image: "assets/images/projects/pulitzer/finalists-vs-circulation.png",
      description: "Analyzed FiveThirtyEight newspaper circulation data in R to explore circulation trends and relationships with Pulitzer Prize finalists and winners. Cleaned missing and inconsistent values and created ggplot2 visualizations to communicate patterns in circulation and newspaper performance.",
      tags: ["R", "RStudio", "ggplot2", "dplyr", "tidyr", "EDA", "Data Storytelling"],
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
      description: "Returned to Fuyao for a second internship to support business operations through logistics planning, including customer EDI orders, forecasts, delivery requirements, and shipping plans. Used Plex and Excel to review planning data, track delivery performance and departmental KPIs, and monitor order changes across production, warehouse, logistics, and customer-facing teams.",
      tags: ["EDI", "Logistics", "Excel", "Plex", "Data Analysis", "Operations", "KPI Tracking", "Forecast Analysis"]
    },
    {
      title: "Information Technology Intern",
      company: "Fuyao Glass America Inc.",
      location: "Dayton, OH",
      dates: "May 2025 — Aug. 2025",
      description: "Worked with the IT department on enterprise systems, network troubleshooting, SQL-based reporting, and workflow automation supporting business operations. Analyzed network performance metrics, supported troubleshooting involving Cisco devices, and built SQL queries for Tableau dashboards used in HR reporting.",
      tags: ["IT", "SQL", "Tableau", "Cisco", "Troubleshooting", "Enterprise Systems", "HR Reporting"]
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
      description: "Supported daily recreational facility operations and customer service for a large student population. Managed facility logistics, reservations, foot-traffic data, and sales information as part of day-to-day service operations while helping maintain a welcoming environment.",
      tags: ["Operations", "Customer Service", "Data", "Logistics", "Sales Data"]
    }
  ],
  education: {
    school: "The Ohio State University",
    degree: "B.S. in Computer and Information Science",
    minor: "Minor: Business · Coursework in Operations Management, Marketing, Human Resources, and Accounting",
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
    { name: "Business & Operations", items: ["Microsoft Excel", "Plex", "EDI", "Google Analytics", "Jira", "Microsoft 365", "Google Workspace", "Logistics Planning", "Customer Service"] },
    { name: "Business & Data Analytics", items: ["Data Cleaning", "ETL", "Dashboard Creation", "KPI Tracking", "Forecast Analysis", "Stakeholder Reporting"] },
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
