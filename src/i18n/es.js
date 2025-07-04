export default {
  greeting: "Bien-vienido ao meu portfólio",
  description: "Desenvolvedor Web Full Stack",

  menu: {
    home: "Inicio",
    about: "Acerca de",
    works: "Trabajos",
    projects: "Proyectos",
    contacts: "Contactos"
  },

  home: {
    click: "Clique para ver outro lado",
    title: 'Soy <span class="text-cyan-400 animate-pulse">Yuri Banzato</span>, Desarrollador de Software.',
    p: 'Especializado en aplicaciones web modernas, interfaces limpias y soluciones escalables.'
  },

  about: {
    title: "Sobre Mí",

    who: {
      title: "Quién Soy",
      text: `Joven entusiasta de la tecnología con enfoque en el desarrollo web.
Participo en eventos, formaciones y siempre busco aprender más.
Actualmente trabajo en ISPT Group en proyectos web y de IoT.
Apasionado por convertir ideas en soluciones reales.`
    },

    skills: {
      title: "Habilidades",
      backend: "Desarrollo Web (Back-end)",
      js: "Tecnologías JavaScript (MERN)",
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

    experienceTitle: "Experiencia Profesional",
    experiences: {
      istec: {
        title: "Pasantía como Desarrollador Full Stack",
        company: "ISTEC - Instituto Superior de Tecnologías Avanzadas, Lisboa",
        period: "2020 - 2021",
        description: `Durante mi pasantía en ISTEC, ayudé a crear una tienda en línea usando Laravel.
Aprendí a implementar inicio de sesión, registros, gestión de productos, pedidos y stock.
Fue mi primer contacto real con el desarrollo web completo.
Gané mucha experiencia práctica en el día a día con proyectos reales.`
      },
      ispt: {
        title: "Desarrollador Full Stack y Administrador de Sistemas",
        company: "ISPT Group, Departamento de I+D",
        period: "2023 – Actualidad",
        description: `En ISPT Group desarrollo aplicaciones web, sistemas IoT y herramientas internas.
También colaboro en el mantenimiento del servidor del departamento.
El objetivo principal es crear nuevas soluciones que apoyen los procesos
y aumenten la eficiencia de la empresa.`
      }
    },

    educationTitle: "Educación y Cursos",
    education: {
      tecnico: {
        title: "Técnico en Gestión y Programación de Sistemas Informáticos",
        institution: "Seomara da Costa Primo",
        period: "2017 - 2020",
        description: `Curso profesional centrado en programación (C++/JS), servidores y hardware.
Proyecto final desarrollado con Laravel y disponible en GitHub.`
      },
      php: {
        title: "Curso Avanzado de PHP",
        institution: "Anpri",
        period: "2020",
        description: `Profundización en Laravel, incluyendo pruebas, caché y optimización.
Desarrollo de aplicaciones escalables.`
      },
      bytes4future: {
        title: "Bytes4Future",
        institution: "Run Code School",
        period: "2022",
        description: `Programa de desarrollo centrado en JavaScript, bibliotecas y bases de datos.
Actividades diarias en plataforma para reforzar el aprendizaje.`
      },
      ctesp: {
        title: "Ctesp – Desarrollo de Software",
        institution: "Lisboa",
        period: "2024 – Actualidad",
        description: `Actualmente estoy cursando una formación técnica en desarrollo de software
para reforzar mis fundamentos en el área.
Mi objetivo es crecer como desarrollador y, en el futuro, seguir con una licenciatura
en Ingeniería Informática.`
      }
    },

    eventsTitle: "Eventos",
    events: {
      appsforgood: {
        title: "Apps for Good",
        location: "Lisboa",
        year: "2018",
        description: `Participé en la 4.ª edición de Apps for Good con la aplicación Saving, la primera versión
de una app pensada para ayudar a los usuarios a ahorrar dinero según sus hábitos de consumo.`
      },
      robotparty: {
        title: "Robot Party",
        location: "Oporto",
        year: "2019",
        description: `Asistí a la 9.ª edición de Robot Party, un evento donde varias escuelas se reunieron
para construir robots con Arduino y competir en diferentes desafíos y circuitos.`
      },
      websummit: {
        title: "Web Summit",
        location: "Lisboa",
        year: "2024",
        description: `Participé en la edición de 2024 del Web Summit representando a ISPT Group.
Fue una experiencia increíble donde tuve contacto con muchas startups y empresas tecnológicas.`
      }
    }
  },


  projects: {
    title: "Trabajos Realizados",

    status: {
      finished: "Completado",
      inProgress: "En progreso"
    },

    jedicon: {
      title: "JediconPT",
      year: "2025",
      description: `Participé en la organización de la primera Jedicon en Portugal, un evento dedicado al universo de Star Wars.
Fui responsable del desarrollo del sitio web, el sistema de boletos, áreas interactivas como el cuestionario y el sorteo,
además de crear un panel completo para que los organizadores gestionaran el evento.`,
      visit: "Visitar Sitio"
    },

    upcoming: {
      title: "Próximos Trabajos",
      description: "Próximamente se agregarán nuevos trabajos aquí. ¡Mantente atento para ver más proyectos!",
      tag1: "Próximamente",
      tag2: "Nuevos proyectos"
    }
  },


  works: {
    title: "Proyectos",

    status: {
      inProgress: "En Desarrollo"
    },

    buttons: {
      learnMore: "Saber más"
    },

    healthmeal: {
      title: "IruyCode Health Meal",
      year: "2024",
      description: `Plataforma de gestión de salud y entrenamientos,
que ofrece planes personalizados de alimentación y ejercicio.
Sistema completo con área de cliente, panel de administración
e integración con APIs de nutrición.`,
      tags: ["Laravel", "7 días gratis", "Gestión de salud y entrenamientos"]
    },

    bankmanager: {
      title: "IruyCode Bank Manager",
      year: "2024",
      description: `Sistema de gestión financiera personal enfocado en el control de deudas,
transacciones recurrentes y reportes inteligentes. Herramienta ideal para organizar
finanzas de forma práctica y eficiente.`,
      tags: ["Laravel", "Control de deudas", "Gestión financiera"]
    },

    pomodoro: {
      title: "IruyCode Pomodoro",
      year: "2024",
      description: `Aplicación de gestión del tiempo con la técnica Pomodoro.
Permite crear tareas, seguir ciclos, integrarse con Spotify
y personalizar notificaciones para un enfoque máximo.`,
      tags: ["Laravel", "Temporizador Pomodoro", "Enfoque y productividad"]
    }
  },


  contact: {
    title: "Contacto",

    form: {
      title: "Enviar un Mensaje",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "Asunto del mensaje",
      messageLabel: "Mensaje",
      messagePlaceholder: "Tu mensaje...",
      sendButton: "Enviar Mensaje"
    },

    info: {
      title: "Información de Contacto",
      email: "yuribanzatodev@gmail.com",
      phone: "(+351) 936-296-609",
      location: "Lisboa - Portugal"
    },

    socials: {
      title: "Redes Sociales",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      github: "GitHub"
    }
  },





  footer: {
    about: "Sobre",
    aboutText: "Desarrollador web full stack apasionado por crear soluciones innovadoras y experiencias digitales únicas.",
    quickLinks: "Enlaces Rápidos",
    services: "Servicios",
    newsletter: "Boletín",
    newsletterText: "Recibe actualizaciones sobre nuevos proyectos y tecnologías.",
    emailPlaceholder: "Tu correo",
    subscribe: "Suscribirse",
    copyright: "Todos los derechos reservados.",
    terms: "Términos de Uso",
    privacy: "Política de Privacidad",
    links: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      works: "Trabajos",
      contact: "Contacto"
    },
    servicesList: ["Desarrollo Web", "Aplicaciones Móviles", "Diseño UI/UX", "Consultoría"]
  }

};
