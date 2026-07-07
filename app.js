/* =========================================================
   IruyCode · Portfolio — interactions
   ========================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const motionOn = document.body.dataset.motion !== "off" && !prefersReduced;
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ---------- tech marquee ---------- */
  (function marquee() {
    const techs = ["Laravel", "PHP", "JavaScript", "React", "Node.js", "Express", "MySQL", "MongoDB", "Tailwind CSS", "Git", "REST APIs", "IoT", "NGINX", "Astro"];
    const track = $("#mq");
    if (!track) return;
    const make = () => techs.map((t) => `<span class="marquee-item"><span class="gd"></span>${t}</span>`).join("");
    track.innerHTML = make() + make();
  })();

  /* ---------- role typewriter (i18n-aware) ---------- */
  (function typewriter() {
    const el = $("#role");
    if (!el) return;

    const fallback = [
      "Desenvolvedor Full-Stack",
      "Laravel · React · Node",
      "Construtor de produtos web",
      "Entusiasta de IoT & sistemas",
    ];
    const getRoles = () => {
      const r = window.I18N && window.I18N.t("hero.roles");
      return Array.isArray(r) && r.length ? r : fallback;
    };

    let roles = getRoles();
    let r = 0, i = 0, deleting = false, timer = null;

    if (!motionOn) {
      el.textContent = roles[0];
      if (window.I18N) window.I18N.onChange(() => { el.textContent = getRoles()[0]; });
      return;
    }

    function tick() {
      const word = roles[r] || "";
      i += deleting ? -1 : 1;
      el.textContent = word.slice(0, i);
      let delay = deleting ? 45 : 90;
      if (!deleting && i === word.length) { delay = 1800; deleting = true; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
      timer = setTimeout(tick, delay);
    }
    tick();

    // reinicia com os novos cargos quando o idioma muda
    if (window.I18N) {
      window.I18N.onChange(() => {
        roles = getRoles();
        r = 0; i = 0; deleting = false;
        clearTimeout(timer);
        el.textContent = "";
        tick();
      });
    }
  })();

  /* ---------- reveal on scroll ---------- */
  (function reveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window) || !motionOn) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
  })();

  /* ---------- dock: scroll progress + active section ---------- */
  (function dock() {
    const progress = $(".dock-progress");
    const items = $$(".dock-item");
    const sections = items
      .map((a) => document.getElementById(a.dataset.target))
      .filter(Boolean);

    function onScroll() {
      const st = window.scrollY || document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.height = (h > 0 ? (st / h) * 100 : 0) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if ("IntersectionObserver" in window && sections.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const id = e.target.id;
              items.forEach((a) => a.classList.toggle("active", a.dataset.target === id));
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      sections.forEach((s) => io.observe(s));
    }
  })();

  /* ---------- timeline filters ---------- */
  (function timeline() {
    const filters = $$(".tl-filter");
    const items = $$(".tl-item");
    if (!filters.length) return;

    // fill counts
    filters.forEach((f) => {
      const cat = f.dataset.cat;
      const n = cat === "all" ? items.length : items.filter((i) => i.dataset.cat === cat).length;
      const badge = $(".tl-count", f);
      if (badge) badge.textContent = n;
    });

    filters.forEach((f) => {
      f.addEventListener("click", () => {
        filters.forEach((x) => x.classList.remove("active"));
        f.classList.add("active");
        const cat = f.dataset.cat;
        items.forEach((it) => {
          const show = cat === "all" || it.dataset.cat === cat;
          it.classList.toggle("hide", !show);
        });
      });
    });
  })();

  /* ---------- work gallery ---------- */
  (function gallery() {
    const g = $("[data-gallery]");
    if (!g) return;
    const slides = $$(".slide", g);
    const nav = $(".gal-nav", g);
    let idx = 0, timer = null;

    // build dots to match slide count
    if (nav) {
      nav.innerHTML = slides.map((_, i) => `<button class="gal-dot${i === 0 ? " active" : ""}" aria-label="Imagem ${i + 1}"></button>`).join("");
    }
    const dots = $$(".gal-dot", g);

    function go(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("active", i === idx));
      dots.forEach((d, i) => d.classList.toggle("active", i === idx));
    }
    function next() { go(idx + 1); }
    function prev() { go(idx - 1); }

    $(".gal-arrow.next", g)?.addEventListener("click", () => { next(); restart(); });
    $(".gal-arrow.prev", g)?.addEventListener("click", () => { prev(); restart(); });
    dots.forEach((d, i) => d.addEventListener("click", () => { go(i); restart(); }));

    function restart() {
      if (!motionOn) return;
      clearInterval(timer);
      timer = setInterval(next, 4500);
    }
    restart();
    g.addEventListener("mouseenter", () => clearInterval(timer));
    g.addEventListener("mouseleave", restart);
  })();

  /* ---------- contact form ---------- */
  (function contact() {
    const form = $("#contactForm");
    if (!form) return;
    const status = $("#formStatus");
    const msg = (k, fb) => (window.I18N && window.I18N.t("contact." + k)) || fb;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form-status pending";
      status.textContent = msg("st_sending", "A enviar...");
      const payload = {
        client_id: "iruycode",
        api_key: "IRUYCODE-API-KEY-93afc2b",
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
      };
      try {
        const res = await fetch("https://phpmailer.iruycode.com/send.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success) {
          status.className = "form-status ok";
          status.textContent = msg("st_ok", "Mensagem enviada com sucesso! ✔");
          form.reset();
        } else {
          status.className = "form-status err";
          status.textContent = msg("st_err", "Erro ao enviar: ") + (data.error || msg("st_err_generic", "tenta novamente."));
        }
      } catch (err) {
        console.error(err);
        status.className = "form-status err";
        status.textContent = msg("st_conn", "Erro de conexão com o servidor.");
      }
    });
  })();

  /* ---------- background particle network ---------- */
  (function bgNet() {
    const canvas = $("#bgNet");
    if (!canvas || !motionOn) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], raf;

    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 20000));
      nodes = Array.from({ length: count }, () => ({
        x: prng() * w,
        y: prng() * h,
        vx: (prng() - 0.5) * 0.35 * dpr,
        vy: (prng() - 0.5) * 0.35 * dpr,
      }));
    }

    // tiny deterministic-ish PRNG seeded from performance timing to avoid Math.random dependency issues
    let seed = (window.performance && performance.now ? performance.now() : 1) % 2147483647 || 1;
    function prng() {
      seed = (seed * 48271) % 2147483647;
      return seed / 2147483647;
    }

    const linkDist = 130 * (dpr || 1);
    function draw() {
      ctx.clearRect(0, 0, w, h);
      const maxD = 130 * dpr;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxD) {
            ctx.strokeStyle = `rgba(34,211,238,${(1 - d / maxD) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(124,139,255,0.55)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.4 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    size();
    draw();
    let rt;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(size, 200);
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else draw();
    });
  })();
})();
