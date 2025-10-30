export default {
  greeting: "Bem-vindo ao meu portfólio",
  description: "Desenvolvedor Web Full Stack",

  menu: {
    home: "Início",
    about: "Sobre",
    works: "Trabalhos",
    projects: "Projetos",
    contacts: "Contatos"
  },

  
  home: {
    typing: {
      h1: [
        'Sou o <span class="text-cyan-400 animate-pulse">Yuri Banzato</span>,',
        'Desenvolvedor de Software.'
      ],
      p: [
        'Especializado em aplicações web modernas,',
        'interfaces limpas e soluções escaláveis.'
      ]
    }
  },



  about: {
    title: "Sobre Mim",

    who: {
      title: "Quem Sou",
      text: `Jovem entusiasta de tecnologia com foco em desenvolvimento web.
Participo de eventos, formações e gosto de estar sempre a aprender.
Atualmente trabalho na ISPT Group em projetos web e IoTs.
Apaixonado por transformar ideias em soluções reais.`
    },

    skills: {
      title: "Habilidades",
      backend: "Desenvolvimento Web (Back-end)",
      js: "Tecnologias JavaScript (MERN)",
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

    experienceTitle: "Experiência Profissional",
    experiences: {
      istec: {
        title: "Estágio de Desenvolvedor Full Stack",
        company: "ISTEC - Instituto Superior de Tecnologias Avançadas Lisboa",
        period: "2020 - 2021",
        description: `Durante o estágio no ISTEC, ajudei a criar uma loja online com Laravel.
Aprendi a implementar login, registos, gestão de produtos, encomendas e stock.
Foi o meu primeiro contacto real com desenvolvimento web completo.
Ganhei bastante experiência prática no dia a dia com projetos reais.`
      },
      ispt: {
        title: "Desenvolvedor Full Stack e Administração de Sistemas",
        company: "ISPT Group, Departamento de C&D",
        period: "2023 - Atualmente",
        description: `Na ISPT Group, desenvolvo aplicações web, IoT e sistemas internos.
Também colaboro na manutenção do servidor do departamento.
O principal objetivo do departamento é criar novos produtos para apoiar os processos
e aumentar a eficiência da empresa.`
      }
    },

    educationTitle: "Educação e Cursos",
    education: {
      tecnico: {
        title: "Técnico em Gestão e Programação de Sistemas Informáticos",
        institution: "Seomara da Costa Primo",
        period: "2017 - 2020",
        description: `Curso profissional com foco em programação (C++/JS), servidores e hardware.
Projeto final desenvolvido em Laravel e disponível no GitHub.`
      },
      php: {
        title: "Curso Avançado de PHP",
        institution: "Anpri",
        period: "2020",
        description: `Aprofundamento em Laravel, incluindo testes, cache e otimização.
Desenvolvimento de aplicações escaláveis.`
      },
      bytes4future: {
        title: "Bytes4Future",
        institution: "Run Code School",
        period: "2021-2022",
        description: `Programa de desenvolvimento com foco em JavaScript, bibliotecas e banco de dados.
Atividades diárias em plataforma para reforço de aprendizado.`
      },
      ctesp: {
        title: "Ctesp – Desenvolvimento de Software",
        institution: "Lisboa",
        period: "2024 – Atualmente",
        description: `Atualmente estou a frequentar um curso técnico de desenvolvimento de software
para fortalecer a minha base na área.
O objetivo é evoluir como programador e, no futuro, seguir para a licenciatura
em Engenharia Informática.`
      }
    },

    eventsTitle: "Eventos",
    events: {
      appsforgood: {
        title: "Apps for Good",
        location: "Lisboa",
        year: "2018",
        description: `Participei na 4.ª edição do Apps for Good com a aplicação Saving, a primeira versão
de uma app pensada para ajudar os utilizadores a poupar dinheiro com base nos seus hábitos de consumo.`
      },
      robotparty: {
        title: "Robot Party",
        location: "Porto",
        year: "2019",
        description: `Estive presente na 9.ª edição da Robot Party, um evento onde várias escolas se juntaram
para criar robôs com Arduino e competir em diferentes provas e circuitos.`
      },
      websummit: {
        title: "Web Summit",
        location: "Lisboa",
        year: "2024",
        description: `Participei na edição de 2024 do Web Summit representando a ISPT Group.
Foi uma experiência incrível onde tive contacto com várias startups e empresas tecnológicas.`
      }
    }
  },



  projects: {
    title: "Trabalhos",

    status: {
      finished: "Concluído",
      inProgress: "Em andamento"
    },

    jedicon: {
      title: "JediconPT",
      year: "2025",
      description: `Estive envolvido na organização da primeira Jedicon em Portugal, um evento dedicado ao universo Star Wars.
Fui responsável pelo desenvolvimento do site, sistema de bilhetes, áreas interativas como quiz e sorteio,
além de criar um dashboard completo para os organizadores gerirem o evento.`,
      visit: "Visitar Site"
    },

    upcoming: {
      title: "Próximos Trabalhos",
      description: "Em breve, novos trabalhos serão adicionados aqui. Fique ligado para ver mais projetos!",
      tag1: "Em breve",
      tag2: "Novos projetos"
    }
  },


  works: {
    title: "Projetos",

    status: {
      inProgress: "Em Desenvolvimento"
    },

    buttons: {
      learnMore: "Saiba mais"
    },

    healthmeal: {
      title: "IruyCode Health Meal",
      year: "2024",
      description: `Plataforma de gestão de saúde e treinos,
oferecendo planos personalizados de alimentação e exercícios.
Sistema completo com área do cliente, dashboard administrativo
e integração com APIs de nutrição.`,
      tags: ["Laravel", "7 dias grátis", "Gestão de saúde e treinos"]
    },

    bankmanager: {
      title: "IruyCode Bank Manager",
      year: "2024",
      description: `Sistema de gestão financeira pessoal com foco em controle de dívidas, transações recorrentes,
e relatórios inteligentes. Ferramenta ideal para organizar finanças de forma prática e eficiente.`,
      tags: ["Laravel", "Controle de dívidas", "Gestão de finanças"]
    },

    pomodoro: {
      title: "IruyCode Pomodoro",
      year: "2024",
      description: `Aplicação para gestão de tempo com a técnica Pomodoro.
Permite criar tarefas, acompanhar ciclos, integrar com Spotify e personalizar notificações para foco máximo.`,
      tags: ["Laravel", "Pomodoro Timer", "Foco e produtividade"]
    }
  },


  contact: {
    title: "Contacto",

    form: {
      title: "Envie uma Mensagem",
      nameLabel: "Nome",
      namePlaceholder: "Seu nome",
      emailLabel: "Email",
      emailPlaceholder: "seu@email.com",
      subjectLabel: "Assunto",
      subjectPlaceholder: "Assunto da mensagem",
      messageLabel: "Mensagem",
      messagePlaceholder: "Sua mensagem...",
      sendButton: "Enviar Mensagem"
    },

    info: {
      title: "Informações de Contato",
      email: "yuribanzatodev@gmail.com",
      phone: "(+351) 936-296-609",
      location: "Lisboa - Portugal"
    },

    socials: {
      title: "Redes Sociais",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      github: "GitHub"
    }
  },



  footer: {
    about: "Sobre",
    aboutText: "Desenvolvedor web full stack apaixonado por criar soluções inovadoras e experiências digitais únicas.",
    quickLinks: "Links Rápidos",
    services: "Serviços",
    newsletter: "Newsletter",
    newsletterText: "Receba atualizações sobre novos projetos e tecnologias.",
    emailPlaceholder: "Seu email",
    subscribe: "Inscrever",
    copyright: "Todos os direitos reservados.",
    terms: "Termos de Uso",
    privacy: "Política de Privacidade",
    links: {
      home: "Home",
      about: "Sobre Mim",
      projects: "Projetos",
      works: "Trabalhos",
      contact: "Contato"
    },
    servicesList: ["Desenvolvimento Web", "Aplicações Mobile", "UI/UX Design", "Consultoria"]
  }

};
