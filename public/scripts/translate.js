document.addEventListener("DOMContentLoaded", () => {
  // Detecta idioma pela URL
  const getLangFromPath = () => {
    const path = window.location.pathname;
    if (path.startsWith("/en")) return "en";
    if (path.startsWith("/es")) return "es";
    return "pt";
  };

  const lang = getLangFromPath();

  // Traduções
  const translations = {
    pt: {
      h1: [
        'Sou o <span class="text-cyan-400 animate-pulse">Yuri Banzato</span>,',
        "Desenvolvedor de Software.",
      ],
      p: [
        "Especializado em aplicações web modernas,",
        "'Acredito que boas ideias merecem ganhar vida — e eu as programo.'",
      ],
    },
    en: {
      h1: [
        'I am <span class="text-cyan-400 animate-pulse">Yuri Banzato</span>,',
        "Software Developer.",
      ],
      p: [
        "Specialized in modern web applications,",
        "'I believe great ideas deserve to come to life — and I code them.'",
      ],
    },
    es: {
      h1: [
        'Soy <span class="text-cyan-400 animate-pulse">Yuri Banzato</span>,',
        "Desarrollador de Software.",
      ],
      p: [
        "Especializado en aplicaciones web modernas,",
        "'Creo que las grandes ideas merecen cobrar vida — y yo las programo.'",
      ],
    },
  };

  // Seletores
  const h1Target = document.getElementById("typing-h1");
  const pTarget = document.getElementById("typing-p");

  // Garante que os elementos existem antes de executar a animação
  if (!h1Target || !pTarget) return;

  // Animação de digitação
  const h1Lines = translations[lang].h1;
  const pLines = translations[lang].p;

  let lineIndex = 0;
  let charIndex = 0;
  let currentLine = "";
  let currentTarget = h1Target;
  let lineArray = h1Lines;

  function typeLine() {
    if (lineIndex < lineArray.length) {
      currentLine = lineArray[lineIndex];

      if (charIndex <= currentLine.length) {
        currentTarget.innerHTML =
          lineArray.slice(0, lineIndex).join("<br>") +
          "<br>" +
          currentLine.slice(0, charIndex);

        charIndex++;
        setTimeout(typeLine, 40);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 300);
      }
    } else if (currentTarget === h1Target) {
      currentTarget = pTarget;
      lineArray = pLines;
      lineIndex = 0;
      charIndex = 0;
      setTimeout(typeLine, 300);
    }
  }

  typeLine();

  // Flip card
  const flipCard = document.getElementById("flip-card");
  const flipInner = document.getElementById("flip-inner");
  if (flipCard && flipInner) {
    flipCard.addEventListener("click", () => {
      flipInner.classList.toggle("rotate-y-180");
    });
  }

  // Menu de idiomas
  const langToggle = document.getElementById("langToggle");
  const langMenu = document.getElementById("langMenu");

  if (langToggle && langMenu) {
    langToggle.addEventListener("click", () => {
      langMenu.classList.toggle("hidden");
    });

    // Fecha o menu se clicar fora
    document.addEventListener("click", (e) => {
      if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.add("hidden");
      }
    });
  }
});
