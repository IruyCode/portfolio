/* =========================================================
   IruyCode · Portfolio — i18n (PT / EN / ES)
   Dicionário + engine de troca de idioma.
   Carregado ANTES de app.js (defer) para que os textos já
   estejam aplicados quando o typewriter arranca.
   ========================================================= */
(function () {
  "use strict";

  const DICT = {
    /* ================= PORTUGUÊS ================= */
    pt: {
      docTitle: "IruyCode · Yuri Banzato — Desenvolvedor de Software",
      nav: { home: "Início", about: "Sobre", timeline: "Percurso", works: "Trabalhos", contact: "Contacto" },
      hero: {
        status: "Disponível para novos projetos",
        roles: [
          "Desenvolvedor Full-Stack",
          "Laravel · React · Node",
          "Construtor de produtos web",
          "Entusiasta de IoT & sistemas",
        ],
        lede: "Construo aplicações web modernas de ponta a ponta — do schema da base de dados à interface. Acredito que boas ideias merecem ganhar vida, e eu programo-as.",
        cta_works: "Ver trabalhos",
        cta_contact: "Contactar",
        stat1: "anos a programar",
        stat2: "estágios full-stack",
        stat3: "curiosidade",
      },
      about: {
        kicker: "// quem_sou.md",
        title: "Transformo ideias em<br />produtos reais e funcionais",
        comment: "/* sobre */",
        h3: "Entusiasta de tecnologia, focado em web",
        p: "Jovem desenvolvedor com base sólida em desenvolvimento web full-stack. Participo de eventos e formações em busca constante de aprender e evoluir. Concluí o CTeSP em Desenvolvimento de Software (nível 5 do QNQ/QEQ europeu) e atualmente frequento a licenciatura em Engenharia Informática.",
        chip_loc: "Lisboa, Portugal",
        chip_edu: "🎓 Licenciatura em Engenharia Informática",
        stack_h3: "Competências técnicas",
        area_fe: "Frontend",
        area_be: "Backend",
        area_ops: "DevOps & Infra",
        area_tools: "Ferramentas & Extra",
      },
      timeline: {
        kicker: "// percurso.log",
        title: "Experiência, formação e eventos",
        sub: "Um percurso construído entre estágios reais, formação contínua e eventos de tecnologia.",
        f_all: "Tudo", f_work: "Experiência", f_edu: "Educação", f_event: "Eventos",
        cat_work: "Experiência", cat_edu: "Educação", cat_event: "Evento",
        e0_period: "Set 2026 — Atualmente",
        e0_h4: "Licenciatura — Engenharia Informática",
        e0_p: "Prosseguimento de estudos após o CTeSP, através do concurso especial de acesso, rumo ao grau de engenheiro informático (nível 6 do QNQ/QEQ).",
        i0_period: "Mar 2026 — Atualmente",
        i0_h4: "Desenvolvimento de Software & Integração de Sistemas",
        i0_p: "Desenvolvimento de soluções internas e externas para clientes, integração com soluções de automação em articulação com outras unidades da empresa e integração com sistemas SCADA, num ambiente de automação industrial e telegestão.",
        i1_h4: "Full-Stack & Administração de Sistemas",
        i1_org: "ISPT Group · Departamento de C&D",
        i1_p: "Desenvolvimento de aplicações web, projetos IoT e sistemas internos, além da manutenção do servidor do departamento. O foco do setor era criar produtos inovadores para otimizar processos e aumentar a eficiência da empresa.",
        i2_h4: "Estágio de Desenvolvedor Full-Stack",
        i2_p: "Construção de uma loja online com Laravel — login, registos, gestão de produtos, encomendas e stock. O meu primeiro contacto real com desenvolvimento web completo, ganho no dia a dia com projetos reais.",
        i3_h4: "CTeSP — Desenvolvimento de Software",
        i3_p: "Curso técnico superior profissional — formação superior de nível 5 do QNQ/QEQ europeu (120 ECTS), com estágio integrado — que fortaleceu a base na área e abriu caminho para a licenciatura em Engenharia Informática.",
        i4_p: "Programa de desenvolvimento focado em JavaScript, bibliotecas e bases de dados, com atividades diárias em plataforma para reforço da aprendizagem.",
        i5_h4: "Técnico em Gestão e Programação de Sistemas Informáticos",
        i5_p: "Curso profissional com foco em programação (C++/JS), servidores e hardware. Projeto final desenvolvido em Laravel e disponível no GitHub.",
        i6_org: "A representar a ISPT Group",
        i6_p: "Uma experiência incrível com contacto direto com várias startups e empresas tecnológicas de todo o mundo.",
        i7_h4: "Robot Party — 9.ª edição",
        i7_org: "Competição de robótica",
        i7_p: "Várias escolas reuniram-se para criar robôs com Arduino e competir em diferentes provas e circuitos.",
        i8_h4: "Apps for Good — 4.ª edição",
        i8_p: "Primeira versão de uma app pensada para ajudar os utilizadores a poupar dinheiro com base nos seus hábitos de consumo.",
      },
      works: {
        kicker: "// trabalho_em_destaque",
        title: "Trabalhos realizados",
        sub: "Projetos entregues para clientes e eventos reais.",
        done: "Concluído",
        desc: "Estive envolvido na organização da primeira Jedicon em Portugal, um evento dedicado ao universo Star Wars. Fui responsável pelo desenvolvimento do site, sistema de bilhetes, áreas interativas como quiz e sorteio, e um dashboard completo para os organizadores gerirem o evento.",
        tag1: "Site institucional", tag2: "Sistema de bilhetes", tag3: "Quiz & sorteio", tag4: "Dashboard admin",
        visit: "Visitar site",
        soon_h4: "Novos trabalhos a caminho",
        soon_p: "Estou sempre a construir. Em breve mais projetos entregues aparecem por aqui.",
      },
      contact: {
        kicker: "// vamos_conversar()",
        title: "Tens um projeto em mente?",
        sub: "Envia-me uma mensagem — respondo normalmente em 24 horas.",
        l_name: "nome", l_email: "email", l_subject: "assunto", l_message: "mensagem",
        ph_name: "O teu nome", ph_email: "tu@email.com", ph_subject: "Assunto da mensagem", ph_message: "Conta-me sobre o teu projeto...",
        send: "Enviar mensagem",
        info: "Informações",
        loc: "Lisboa, Portugal",
        net: "Redes",
        st_sending: "A enviar...",
        st_ok: "Mensagem enviada com sucesso! ✔",
        st_err: "Erro ao enviar: ",
        st_err_generic: "tenta novamente.",
        st_conn: "Erro de conexão com o servidor.",
      },
      footer: {
        tagline: "Desenvolvedor web full-stack apaixonado por criar soluções inovadoras e experiências digitais únicas.",
        nav_h4: "Navegação",
        services_h4: "Serviços",
        srv_events: "Eventos",
        rights: "© 2025 Yuri Banzato · IruyCode. Todos os direitos reservados.",
        built: "Construído com ☕ e código.",
      },
    },

    /* ================= ENGLISH ================= */
    en: {
      docTitle: "IruyCode · Yuri Banzato — Software Developer",
      nav: { home: "Home", about: "About", timeline: "Journey", works: "Work", contact: "Contact" },
      hero: {
        status: "Available for new projects",
        roles: [
          "Full-Stack Developer",
          "Laravel · React · Node",
          "Web product builder",
          "IoT & systems enthusiast",
        ],
        lede: "I build modern web applications end to end — from the database schema to the interface. I believe great ideas deserve to come to life, and I code them.",
        cta_works: "View work",
        cta_contact: "Contact",
        stat1: "years coding",
        stat2: "full-stack internships",
        stat3: "curiosity",
      },
      about: {
        kicker: "// who_am_i.md",
        title: "I turn ideas into<br />real, working products",
        comment: "/* about */",
        h3: "Tech enthusiast, focused on web",
        p: "Young developer with a solid foundation in full-stack web development. I take part in events and training in a constant search to learn and evolve. I completed the CTeSP in Software Development (level 5 on the European EQF) and I'm currently pursuing a Computer Engineering degree.",
        chip_loc: "Lisbon, Portugal",
        chip_edu: "🎓 BSc in Computer Engineering",
        stack_h3: "Technical skills",
        area_fe: "Frontend",
        area_be: "Backend",
        area_ops: "DevOps & Infra",
        area_tools: "Tools & Extra",
      },
      timeline: {
        kicker: "// journey.log",
        title: "Experience, education and events",
        sub: "A journey built across real internships, continuous learning and tech events.",
        f_all: "All", f_work: "Experience", f_edu: "Education", f_event: "Events",
        cat_work: "Experience", cat_edu: "Education", cat_event: "Event",
        e0_period: "Sep 2026 — Present",
        e0_h4: "Bachelor's — Computer Engineering",
        e0_p: "Continuing my studies after the CTeSP, via the special access route, toward a Computer Engineering degree (EQF level 6).",
        i0_period: "Mar 2026 — Present",
        i0_h4: "Software Development & Systems Integration",
        i0_p: "Development of internal solutions and external solutions for clients, integration with automation solutions in coordination with the company's other units, and integration with SCADA systems, in an industrial automation and remote management environment.",
        i1_h4: "Full-Stack & Systems Administration",
        i1_org: "ISPT Group · R&D Department",
        i1_p: "Development of web applications, IoT projects and internal systems, plus maintenance of the department's server. The team's focus was building innovative products to optimize processes and boost the company's efficiency.",
        i2_h4: "Full-Stack Developer Internship",
        i2_p: "Building an online store with Laravel — login, registration, product management, orders and stock. My first real contact with full web development, gained day by day on real projects.",
        i3_h4: "CTeSP — Software Development",
        i3_p: "Higher professional technical course — level 5 higher education under the Portuguese NQF / European EQF (120 ECTS), with an integrated internship — which strengthened my foundation in the field and opened the way to the Computer Engineering degree.",
        i4_p: "Development program focused on JavaScript, libraries and databases, with daily platform activities to reinforce learning.",
        i5_h4: "Technician in Management & Programming of IT Systems",
        i5_p: "Vocational course focused on programming (C++/JS), servers and hardware. Final project built in Laravel and available on GitHub.",
        i6_org: "Representing ISPT Group",
        i6_p: "An incredible experience with direct contact with many startups and tech companies from all over the world.",
        i7_h4: "Robot Party — 9th edition",
        i7_org: "Robotics competition",
        i7_p: "Several schools came together to build Arduino robots and compete in different challenges and circuits.",
        i8_h4: "Apps for Good — 4th edition",
        i8_p: "First version of an app designed to help users save money based on their spending habits.",
      },
      works: {
        kicker: "// featured_work",
        title: "Completed work",
        sub: "Projects delivered for real clients and events.",
        done: "Completed",
        desc: "I was involved in organizing the first Jedicon in Portugal, an event dedicated to the Star Wars universe. I was responsible for developing the website, ticketing system, interactive areas such as quiz and giveaway, and a complete dashboard for the organizers to manage the event.",
        tag1: "Institutional site", tag2: "Ticketing system", tag3: "Quiz & giveaway", tag4: "Admin dashboard",
        visit: "Visit site",
        soon_h4: "New work on the way",
        soon_p: "I'm always building. More delivered projects will show up here soon.",
      },
      contact: {
        kicker: "// lets_talk()",
        title: "Got a project in mind?",
        sub: "Send me a message — I usually reply within 24 hours.",
        l_name: "name", l_email: "email", l_subject: "subject", l_message: "message",
        ph_name: "Your name", ph_email: "you@email.com", ph_subject: "Message subject", ph_message: "Tell me about your project...",
        send: "Send message",
        info: "Information",
        loc: "Lisbon, Portugal",
        net: "Social",
        st_sending: "Sending...",
        st_ok: "Message sent successfully! ✔",
        st_err: "Error sending: ",
        st_err_generic: "please try again.",
        st_conn: "Server connection error.",
      },
      footer: {
        tagline: "Full-stack web developer passionate about building innovative solutions and unique digital experiences.",
        nav_h4: "Navigation",
        services_h4: "Services",
        srv_events: "Events",
        rights: "© 2025 Yuri Banzato · IruyCode. All rights reserved.",
        built: "Built with ☕ and code.",
      },
    },

    /* ================= ESPAÑOL ================= */
    es: {
      docTitle: "IruyCode · Yuri Banzato — Desarrollador de Software",
      nav: { home: "Inicio", about: "Sobre", timeline: "Trayectoria", works: "Trabajos", contact: "Contacto" },
      hero: {
        status: "Disponible para nuevos proyectos",
        roles: [
          "Desarrollador Full-Stack",
          "Laravel · React · Node",
          "Constructor de productos web",
          "Entusiasta de IoT & sistemas",
        ],
        lede: "Construyo aplicaciones web modernas de principio a fin — desde el esquema de la base de datos hasta la interfaz. Creo que las buenas ideas merecen cobrar vida, y yo las programo.",
        cta_works: "Ver trabajos",
        cta_contact: "Contactar",
        stat1: "años programando",
        stat2: "prácticas full-stack",
        stat3: "curiosidad",
      },
      about: {
        kicker: "// quien_soy.md",
        title: "Transformo ideas en<br />productos reales y funcionales",
        comment: "/* sobre-mí */",
        h3: "Entusiasta de la tecnología, enfocado en web",
        p: "Joven desarrollador con una base sólida en desarrollo web full-stack. Participo en eventos y formaciones en búsqueda constante de aprender y evolucionar. Concluí el CTeSP en Desarrollo de Software (nivel 5 del MEC europeo) y actualmente curso el grado en Ingeniería Informática.",
        chip_loc: "Lisboa, Portugal",
        chip_edu: "🎓 Grado en Ingeniería Informática",
        stack_h3: "Competencias técnicas",
        area_fe: "Frontend",
        area_be: "Backend",
        area_ops: "DevOps & Infra",
        area_tools: "Herramientas & Extra",
      },
      timeline: {
        kicker: "// trayectoria.log",
        title: "Experiencia, formación y eventos",
        sub: "Una trayectoria construida entre prácticas reales, formación continua y eventos de tecnología.",
        f_all: "Todo", f_work: "Experiencia", f_edu: "Educación", f_event: "Eventos",
        cat_work: "Experiencia", cat_edu: "Educación", cat_event: "Evento",
        e0_period: "Sept 2026 — Actualidad",
        e0_h4: "Grado — Ingeniería Informática",
        e0_p: "Continuación de los estudios tras el CTeSP, mediante el concurso especial de acceso, hacia el título de ingeniero informático (nivel 6 del MEC europeo).",
        i0_period: "Mar 2026 — Actualidad",
        i0_h4: "Desarrollo de Software & Integración de Sistemas",
        i0_p: "Desarrollo de soluciones internas y externas para clientes, integración con soluciones de automatización en coordinación con otras unidades de la empresa e integración con sistemas SCADA, en un entorno de automatización industrial y telegestión.",
        i1_h4: "Full-Stack & Administración de Sistemas",
        i1_org: "ISPT Group · Departamento de I+D",
        i1_p: "Desarrollo de aplicaciones web, proyectos IoT y sistemas internos, además del mantenimiento del servidor del departamento. El objetivo del sector era crear productos innovadores para optimizar procesos y aumentar la eficiencia de la empresa.",
        i2_h4: "Prácticas de Desarrollador Full-Stack",
        i2_p: "Construcción de una tienda online con Laravel — login, registros, gestión de productos, pedidos y stock. Mi primer contacto real con el desarrollo web completo, adquirido día a día con proyectos reales.",
        i3_h4: "CTeSP — Desarrollo de Software",
        i3_p: "Curso técnico superior profesional — formación superior de nivel 5 del MNC/MEC europeo (120 ECTS), con prácticas integradas — que fortaleció la base en el área y abrió el camino hacia el grado en Ingeniería Informática.",
        i4_p: "Programa de desarrollo enfocado en JavaScript, bibliotecas y bases de datos, con actividades diarias en plataforma para reforzar el aprendizaje.",
        i5_h4: "Técnico en Gestión y Programación de Sistemas Informáticos",
        i5_p: "Curso profesional con enfoque en programación (C++/JS), servidores y hardware. Proyecto final desarrollado en Laravel y disponible en GitHub.",
        i6_org: "Representando a ISPT Group",
        i6_p: "Una experiencia increíble con contacto directo con varias startups y empresas tecnológicas de todo el mundo.",
        i7_h4: "Robot Party — 9.ª edición",
        i7_org: "Competición de robótica",
        i7_p: "Varias escuelas se reunieron para crear robots con Arduino y competir en diferentes pruebas y circuitos.",
        i8_h4: "Apps for Good — 4.ª edición",
        i8_p: "Primera versión de una app pensada para ayudar a los usuarios a ahorrar dinero según sus hábitos de consumo.",
      },
      works: {
        kicker: "// trabajo_destacado",
        title: "Trabajos realizados",
        sub: "Proyectos entregados para clientes y eventos reales.",
        done: "Completado",
        desc: "Participé en la organización de la primera Jedicon en Portugal, un evento dedicado al universo Star Wars. Fui responsable del desarrollo del sitio web, el sistema de entradas, áreas interactivas como quiz y sorteo, y un panel completo para que los organizadores gestionaran el evento.",
        tag1: "Sitio institucional", tag2: "Sistema de entradas", tag3: "Quiz & sorteo", tag4: "Panel de administración",
        visit: "Visitar sitio",
        soon_h4: "Nuevos trabajos en camino",
        soon_p: "Siempre estoy construyendo. Pronto aparecerán aquí más proyectos entregados.",
      },
      contact: {
        kicker: "// hablemos()",
        title: "¿Tienes un proyecto en mente?",
        sub: "Envíame un mensaje — normalmente respondo en 24 horas.",
        l_name: "nombre", l_email: "email", l_subject: "asunto", l_message: "mensaje",
        ph_name: "Tu nombre", ph_email: "tu@email.com", ph_subject: "Asunto del mensaje", ph_message: "Cuéntame sobre tu proyecto...",
        send: "Enviar mensaje",
        info: "Información",
        loc: "Lisboa, Portugal",
        net: "Redes",
        st_sending: "Enviando...",
        st_ok: "¡Mensaje enviado con éxito! ✔",
        st_err: "Error al enviar: ",
        st_err_generic: "inténtalo de nuevo.",
        st_conn: "Error de conexión con el servidor.",
      },
      footer: {
        tagline: "Desarrollador web full-stack apasionado por crear soluciones innovadoras y experiencias digitales únicas.",
        nav_h4: "Navegación",
        services_h4: "Servicios",
        srv_events: "Eventos",
        rights: "© 2025 Yuri Banzato · IruyCode. Todos los derechos reservados.",
        built: "Construido con ☕ y código.",
      },
    },
  };

  const LANGS = ["pt", "en", "es"];
  const STORE_KEY = "iruy_lang";

  /* ---- resolve dotted key against a lang tree ---- */
  function resolve(lang, key) {
    const parts = key.split(".");
    let node = DICT[lang];
    for (const p of parts) {
      if (node == null) return undefined;
      node = node[p];
    }
    return node;
  }

  let current = "pt";
  const listeners = [];

  function t(key, lang) {
    const l = lang || current;
    let val = resolve(l, key);
    if (val === undefined && l !== "pt") val = resolve("pt", key); // fallback PT
    return val;
  }

  function apply(lang) {
    // text nodes (innerHTML — permite <br>, entidades)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = t(el.getAttribute("data-i18n"), lang);
      if (typeof val === "string") el.innerHTML = val;
    });
    // placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const val = t(el.getAttribute("data-i18n-ph"), lang);
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });
    // <html lang> + title
    document.documentElement.setAttribute("lang", lang);
    const title = t("docTitle", lang);
    if (typeof title === "string") document.title = title;
    // estado dos botões de idioma
    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    const cur = document.querySelector(".dock-lang-cur");
    if (cur) cur.textContent = lang.toUpperCase();
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) lang = "pt";
    current = lang;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    apply(lang);
    listeners.forEach((fn) => { try { fn(lang); } catch (e) {} });
  }

  function initialLang() {
    let saved;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved && LANGS.includes(saved)) return saved;
    const nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : "pt";
  }

  // API pública (usada por app.js)
  window.I18N = {
    t,
    setLang,
    getLang: () => current,
    langs: LANGS,
    onChange: (fn) => { if (typeof fn === "function") listeners.push(fn); },
  };

  /* ---- wiring do seletor de idioma no dock ---- */
  function wireSwitcher() {
    const box = document.querySelector(".dock-lang");
    if (!box) return;
    const btn = box.querySelector(".dock-lang-btn");
    const menu = box.querySelector(".dock-lang-menu");

    if (btn && menu) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = box.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      document.addEventListener("click", (e) => {
        if (!box.contains(e.target)) {
          box.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && box.classList.contains("open")) {
          box.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          btn.focus(); // devolve o foco ao botão (teclado/AT)
        }
      });
    }

    box.querySelectorAll("[data-lang]").forEach((b) => {
      b.addEventListener("click", () => {
        setLang(b.getAttribute("data-lang"));
        box.classList.remove("open");
        if (btn) { btn.setAttribute("aria-expanded", "false"); btn.focus(); }
      });
    });
  }

  // aplica imediatamente (scripts defer correm com o DOM já parseado)
  current = initialLang();
  apply(current);
  wireSwitcher();
})();
