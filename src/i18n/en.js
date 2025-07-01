export default {
  greeting: "Welcome to my portfolio",
  description: "Full Stack Web Developer",

  menu: {
    home: "Home",
    about: "About",
    works: "Works",
    projects: "Projects",
    contacts: "Contacts"
  },

  home: {
    title: 'I am <span class="text-cyan-400 animate-pulse">Yuri Banzato</span>, Software Developer.',
    p: 'Specialized in modern web applications, clean interfaces and scalable solutions.'
  },

  about: {
    title: "About Me",
    who: {
      title: "Who I Am",
      text: `Young technology enthusiast focused on web development.
I participate in events, training, and enjoy continuous learning.
I currently work at ISPT Group on web and IoT projects.
Passionate about turning ideas into real solutions.`
    },
    skills: {
      title: "Skills",
      backend: "Web Development (Back-end)",
      js: "JavaScript Technologies (MERN)",
      items: {
        php: "PHP",
        laravel: "Laravel",
        mysql: "MySQL",
        react: "React",
        express: "Express",
        mongo: "MongoDB",
        js: "JavaScript"
      }
    },
    experienceTitle: "Professional Experience",
    experiences: [
      {
        title: "Full Stack Developer Internship",
        company: "ISTEC - Instituto Superior de Tecnologias Avançadas Lisboa",
        period: "2020 - 2021",
        description: `During the internship at ISTEC, I helped create an online store with Laravel.
I learned to implement login, registration, product management, orders, and stock.
It was my first real contact with complete web development.
I gained a lot of practical experience in the day-to-day with real projects.`
      },
      {
        title: "Full Stack Developer and Systems Administrator",
        company: "ISPT Group, R&D Department",
        period: "2023 - Present",
        description: `At ISPT Group, I develop web applications, IoT, and internal systems.
I also collaborate on maintaining the department's server.
The main goal of the department is to create new products to support processes
and increase the company's efficiency.`
      }
    ],
    educationTitle: "Education and Courses",
    education: [
      {
        title: "Technical Course in Management and Programming of Computer Systems",
        institution: "Seomara da Costa Primo",
        period: "2017 - 2020",
        description: `Professional course focused on programming (C++/JS), servers, and hardware.
Final project developed in Laravel and available on GitHub.`
      },
      {
        title: "Advanced PHP Course",
        institution: "Anpri",
        period: "2020",
        description: `In-depth study of Laravel, including testing, caching, and optimization.
Development of scalable applications.`
      },
      {
        title: "Bytes4Future",
        institution: "Run Code School",
        period: "2022",
        description: `Development program focused on JavaScript, libraries, and databases.
Daily activities on the platform to reinforce learning.`
      },
      {
        title: "Ctesp – Desenvolvimento de Software",
        institution: "Lisboa",
        period: "2024 – Present",
        description: `Currently, I am attending a technical course in software development
to strengthen my foundation in the area.
The goal is to evolve as a programmer and, in the future, pursue a degree
in Computer Engineering.`
      }
    ],
    eventsTitle: "Events",
    events: [
      {
        title: "Apps for Good",
        location: "Lisbon",
        year: "2018",
        description: `I participated in the 4th edition of Apps for Good with the Saving application, the first version
of an app designed to help users save money based on their consumption habits.`
      },
      {
        title: "Robot Party",
        location: "Porto",
        year: "2019",
        description: `I was present at the 9th edition of Robot Party, an event where several schools came together
to create robots with Arduino and compete in different tests and circuits.`
      },
      {
        title: "Web Summit",
        location: "Lisbon",
        year: "2024",
        description: `I participated in the 2024 edition of Web Summit representing ISPT Group.
It was an incredible experience where I had contact with several startups and technology companies.`
      }
    ]
  },

  footer: {
    about: "About",
    aboutText: "Full stack web developer passionate about creating innovative solutions and unique digital experiences.",
    quickLinks: "Quick Links",
    services: "Services",
    newsletter: "Newsletter",
    newsletterText: "Get updates about new projects and technologies.",
    emailPlaceholder: "Your email",
    subscribe: "Subscribe",
    copyright: "All rights reserved.",
    terms: "Terms of Use",
    privacy: "Privacy Policy",
    links: {
      home: "Home",
      about: "About Me",
      projects: "Projects",
      works: "Works",
      contact: "Contact"
    },
    servicesList: ["Web Development", "Mobile Applications", "UI/UX Design", "Consulting"]
  }

};
