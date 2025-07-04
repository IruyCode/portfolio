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
I participate in events, training programs, and I’m always eager to learn.
Currently working at ISPT Group on web and IoT projects.
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
        experiences: {
            istec: {
                title: "Full Stack Developer Intern",
                company: "ISTEC - Advanced Institute of Technologies, Lisbon",
                period: "2020 - 2021",
                description: `During my internship at ISTEC, I helped build an online store using Laravel.
I learned to implement login, registration, product management, orders, and stock.
It was my first real experience with full web development.
I gained solid hands-on experience working on real-world projects.`
            },
            ispt: {
                title: "Full Stack Developer and Systems Administrator",
                company: "ISPT Group, R&D Department",
                period: "2023 – Present",
                description: `At ISPT Group, I develop web applications, IoT systems, and internal tools.
I also assist with server maintenance within the department.
The main goal is to create new tools to support processes and boost the company’s efficiency.`
            }
        },

        educationTitle: "Education & Courses",
        education: {
            tecnico: {
                title: "Technician in Management and Programming of Information Systems",
                institution: "Seomara da Costa Primo",
                period: "2017 - 2020",
                description: `Professional course focused on programming (C++/JS), servers, and hardware.
Final project developed in Laravel and available on GitHub.`
            },
            php: {
                title: "Advanced PHP Course",
                institution: "Anpri",
                period: "2020",
                description: `Deep dive into Laravel, including testing, caching, and optimization.
Development of scalable applications.`
            },
            bytes4future: {
                title: "Bytes4Future",
                institution: "Run Code School",
                period: "2022",
                description: `Development program focused on JavaScript, libraries, and databases.
Daily platform-based activities to reinforce learning.`
            },
            ctesp: {
                title: "Ctesp – Software Development",
                institution: "Lisbon",
                period: "2024 – Present",
                description: `Currently attending a technical course in software development
to strengthen my foundation in the field.
The goal is to grow as a developer and eventually pursue a Bachelor's in Software Engineering.`
            }
        },

        eventsTitle: "Events",
        events: {
            appsforgood: {
                title: "Apps for Good",
                location: "Lisbon",
                year: "2018",
                description: `I participated in the 4th edition of Apps for Good with the "Saving" app,
the first version of a tool designed to help users save money based on their consumption habits.`
            },
            robotparty: {
                title: "Robot Party",
                location: "Porto",
                year: "2019",
                description: `I attended the 9th edition of Robot Party, an event where schools came together
to build robots using Arduino and compete in various challenges.`
            },
            websummit: {
                title: "Web Summit",
                location: "Lisbon",
                year: "2024",
                description: `I participated in the 2024 edition of Web Summit representing ISPT Group.
It was an amazing experience where I engaged with many startups and tech companies.`
            }
        }
    },

    projects: {
        title: "Completed Works",

        status: {
            finished: "Completed",
            inProgress: "In progress"
        },

        jedicon: {
            title: "JediconPT",
            year: "2025",
            description: `I was involved in organizing the first Jedicon in Portugal, an event dedicated to the Star Wars universe.
I was responsible for developing the website, ticketing system, interactive areas like quiz and raffle,
as well as creating a complete dashboard for the organizers to manage the event.`,
            visit: "Visit Website"
        },

        upcoming: {
            title: "Upcoming Works",
            description: "Soon, new works will be added here. Stay tuned to see more projects!",
            tag1: "Coming soon",
            tag2: "New projects"
        }
    },

    works: {
        title: "Projects",

        status: {
            inProgress: "In Progress"
        },

        buttons: {
            learnMore: "Learn More"
        },

        healthmeal: {
            title: "IruyCode Health Meal",
            year: "2024",
            description: `Health and fitness management platform,
offering personalized meal and workout plans.
Complete system with client area, admin dashboard,
and nutrition API integration.`,
            tags: ["Laravel", "7-day free trial", "Health and fitness management"]
        },

        bankmanager: {
            title: "IruyCode Bank Manager",
            year: "2024",
            description: `Personal finance management system focused on debt control,
recurring transactions, and smart reports. Ideal tool for organizing
finances efficiently and practically.`,
            tags: ["Laravel", "Debt control", "Finance management"]
        },

        pomodoro: {
            title: "IruyCode Pomodoro",
            year: "2024",
            description: `Time management application using the Pomodoro technique.
Allows task creation, cycle tracking, Spotify integration,
and customizable notifications for maximum focus.`,
            tags: ["Laravel", "Pomodoro Timer", "Focus and productivity"]
        }
    },

    contact: {
        title: "Contact Me",

        form: {
            title: "Send a Message",
            nameLabel: "Name",
            namePlaceholder: "Your name",
            emailLabel: "Email",
            emailPlaceholder: "your@email.com",
            subjectLabel: "Subject",
            subjectPlaceholder: "Message subject",
            messageLabel: "Message",
            messagePlaceholder: "Your message...",
            sendButton: "Send Message"
        },

        info: {
            title: "Contact Information",
            email: "yuribanzatodev@gmail.com",
            phone: "(+351) 936-296-609",
            location: "Lisbon - Portugal"
        },

        socials: {
            title: "Social Media",
            linkedin: "LinkedIn",
            instagram: "Instagram",
            github: "GitHub"
        }
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
