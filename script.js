(() => {
  "use strict";

  const I18N = {
    pt: {
      "skip": "Pular para o conteúdo",
      "nav.about": "Sobre", "nav.stack": "Stack", "nav.exp": "Experiência", "nav.edu": "Formação", "nav.contact": "Contato",
      "hero.status": "Disponível para novas oportunidades",
      "hero.lead": "Construo e sustento infraestrutura híbrida (cloud + on-premises) para plataformas de missão crítica — automatizando o que se repete e observando o que importa.",
      "hero.cta1": "Fale comigo", "hero.cta2": "Baixar CV",
      "hero.photoAlt": "Foto de Lucas Cardoso Alecrim",
      "about.title": "Sobre mim",
      "about.p1": "DevOps Engineer com vivência em infraestrutura híbrida, atuando na automação, sustentação e evolução de plataformas de alto tráfego no setor de iGaming.",
      "about.p2": "Minha base veio do Suporte N2/N3 — e foi lá que aprendi a ir até a causa raiz de incidentes em produção. Hoje uso isso para construir ambientes escaláveis, seguros e altamente disponíveis, automatizando processos e reduzindo falhas operacionais.",
      "about.s1": "anos em infraestrutura e suporte", "about.s2": "ambientes: dev, homolog e prod",
      "about.s3": "certificações e formações", "about.s4": "inglês profissional",
      "stack.title": "Stack técnica", "stack.infra": "Infra & Cloud", "stack.obs": "Observabilidade",
      "stack.alerts": "Monitoramento & Alertas", "stack.auto": "Automação & Dev", "stack.db": "Bancos de dados",
      "stack.method": "Metodologias", "stack.agile": "Ágil",
      "exp.title": "Experiência",
      "exp.j1.role": "Analista DevOps Pleno", "exp.j1.when": "Jun 2026 – Atual",
      "exp.j1.where": "Recife, PE · Plataformas iGaming (cloud + on-premises)",
      "exp.j1.b1": "Administro infraestrutura híbrida para plataformas de jogos, cobrindo desenvolvimento, homologação e produção.",
      "exp.j1.b2": "Deploys e sustentação de serviços em Docker/Compose, incluindo diagnóstico de gargalos — ex.: pico de CPU em backend Python causado por bug de truthiness em profiler customizado e logging excessivo sob carga de bots.",
      "exp.j1.b3": "Configuro e monitoro Nginx, SSL/TLS, DNS e networking em Linux, incluindo permissionamento (ACL/setfacl) para deploys.",
      "exp.j1.b4": "Mantenho e crio pipelines de CI/CD para automação de deploys.",
      "exp.j1.b5": "Atuo junto aos times de desenvolvimento na resolução de incidentes e otimização de produção.",
      "exp.j2.role": "Analista DevOps (Estágio)", "exp.j2.when": "Set 2025 – Jun 2026",
      "exp.j2.where": "Recife, PE · Startup de governança de dados",
      "exp.j2.b1": "Automatizei infraestrutura e rotinas operacionais com Ansible e Bash.",
      "exp.j2.b2": "Administração e troubleshooting de servidores Ubuntu e ambientes Docker, com boas práticas de imagens.",
      "exp.j2.b3": "Implementei monitoramento e alertas (SRE básico) com webhooks customizados e scripts Bash.",
      "exp.j2.b4": "Mantive ambientes on-demand na DigitalOcean com foco em custo, estabilidade e escalabilidade.",
      "exp.j2.b5": "Apoiei pipelines de CI/CD, automatizando etapas de deploy e validação.",
      "exp.j3.role": "Analista de Suporte N2/N3 (PostgreSQL)", "exp.j3.when": "Mai 2024 – Set 2025",
      "exp.j3.where": "Recife, PE · PDV franquia webposto",
      "exp.j3.b1": "Administração, provisionamento e eficiência de bancos PostgreSQL.",
      "exp.j3.b2": "Suporte N2/N3 com foco em diagnóstico e resolução de causa raiz de incidentes.",
      "edu.title": "Formação & certificações", "edu.degreeTag": "graduação",
      "edu.degree": "Análise e Desenvolvimento de Sistemas", "edu.when": "Jan 2025 – Jun 2027 · em andamento",
      "edu.c3": "Formação Acelerada em Programação Back-End com JavaScript",
      "contact.title": "Vamos conversar",
      "contact.lead": "Aberto a oportunidades em DevOps, SRE e Cloud — remoto ou em Recife. Respondo rápido.",
      "contact.loc": "local",
      "footer.built": "Deploy via GitHub Pages · lcaoficial.com.br",
      "meta.title": "Lucas Alecrim · DevOps Engineer",
      "meta.desc": "Lucas Cardoso Alecrim — DevOps Engineer em Recife. Linux, Docker, CI/CD, Ansible, Terraform, Azure, AWS e observabilidade."
    },
    en: {
      "skip": "Skip to content",
      "nav.about": "About", "nav.stack": "Stack", "nav.exp": "Experience", "nav.edu": "Education", "nav.contact": "Contact",
      "hero.status": "Open to new opportunities",
      "hero.lead": "I build and run hybrid infrastructure (cloud + on-premises) for mission-critical platforms — automating what repeats and observing what matters.",
      "hero.cta1": "Get in touch", "hero.cta2": "Download CV",
      "hero.photoAlt": "Photo of Lucas Cardoso Alecrim",
      "about.title": "About me",
      "about.p1": "DevOps Engineer with hands-on experience in hybrid infrastructure, automating, operating and evolving high-traffic platforms in the iGaming industry.",
      "about.p2": "My foundation comes from L2/L3 Support — that's where I learned to chase production incidents down to their root cause. Today I use that to build scalable, secure and highly available environments, automating processes and reducing operational failures.",
      "about.s1": "years in infrastructure & support", "about.s2": "environments: dev, staging & prod",
      "about.s3": "certifications & courses", "about.s4": "professional working English",
      "stack.title": "Tech stack", "stack.infra": "Infra & Cloud", "stack.obs": "Observability",
      "stack.alerts": "Monitoring & Alerting", "stack.auto": "Automation & Dev", "stack.db": "Databases",
      "stack.method": "Methodologies", "stack.agile": "Agile",
      "exp.title": "Experience",
      "exp.j1.role": "DevOps Engineer (Mid-level)", "exp.j1.when": "Jun 2026 – Present",
      "exp.j1.where": "Recife, Brazil · iGaming platforms (cloud + on-premises)",
      "exp.j1.b1": "Manage hybrid infrastructure for gaming platforms across development, staging and production.",
      "exp.j1.b2": "Deploy and operate Docker/Compose services, including performance bottleneck diagnosis — e.g. a CPU spike in a Python backend caused by a truthiness bug in a custom profiler plus excessive logging under bot load.",
      "exp.j1.b3": "Configure and monitor Nginx, SSL/TLS, DNS and networking on Linux, including permissions (ACL/setfacl) for deployments.",
      "exp.j1.b4": "Build and maintain CI/CD pipelines for deployment automation.",
      "exp.j1.b5": "Work closely with development teams on incident resolution and production optimization.",
      "exp.j2.role": "DevOps Intern", "exp.j2.when": "Sep 2025 – Jun 2026",
      "exp.j2.where": "Recife, Brazil · Data governance startup",
      "exp.j2.b1": "Automated infrastructure and operational routines with Ansible and Bash.",
      "exp.j2.b2": "Administered and troubleshot Ubuntu servers and Docker environments, applying image best practices.",
      "exp.j2.b3": "Implemented monitoring and alerting (basic SRE) with custom webhooks and Bash scripts.",
      "exp.j2.b4": "Maintained on-demand DigitalOcean environments focused on cost, stability and scalability.",
      "exp.j2.b5": "Supported CI/CD pipelines, automating deployment and validation steps.",
      "exp.j3.role": "L2/L3 Support Analyst (PostgreSQL)", "exp.j3.when": "May 2024 – Sep 2025",
      "exp.j3.where": "Recife, Brazil · POS for fuel-station franchise",
      "exp.j3.b1": "Administered, provisioned and tuned PostgreSQL databases.",
      "exp.j3.b2": "L2/L3 support focused on diagnosis and root-cause resolution of incidents.",
      "edu.title": "Education & certifications", "edu.degreeTag": "degree",
      "edu.degree": "Systems Analysis and Development", "edu.when": "Jan 2025 – Jun 2027 · in progress",
      "edu.c3": "Accelerated Back-End Programming with JavaScript",
      "contact.title": "Let's talk",
      "contact.lead": "Open to DevOps, SRE and Cloud opportunities — remote or in Recife. I reply fast.",
      "contact.loc": "location",
      "footer.built": "Deployed on GitHub Pages · lcaoficial.com.br",
      "meta.title": "Lucas Alecrim · DevOps Engineer",
      "meta.desc": "Lucas Cardoso Alecrim — DevOps Engineer based in Recife, Brazil. Linux, Docker, CI/CD, Ansible, Terraform, Azure, AWS and observability."
    }
  };

  const TERM = {
    pt: [
      ["$ whoami", "p"], ["lucas — devops engineer @ recife", "o"],
      ["$ docker compose ps --format '{{.Name}}'", "p"], ["nginx · api · worker · loki", "o"],
      ["$ ansible-playbook deploy.yml", "p"], ["PLAY RECAP ok=12 changed=3 failed=0", "ok"],
      ["$ curl -I https://lcaoficial.com.br", "p"], ["HTTP/2 200 ✓", "ok"]
    ],
    en: [
      ["$ whoami", "p"], ["lucas — devops engineer @ recife, br", "o"],
      ["$ docker compose ps --format '{{.Name}}'", "p"], ["nginx · api · worker · loki", "o"],
      ["$ ansible-playbook deploy.yml", "p"], ["PLAY RECAP ok=12 changed=3 failed=0", "ok"],
      ["$ curl -I https://lcaoficial.com.br", "p"], ["HTTP/2 200 ✓", "ok"]
    ]
  };

  const STORAGE_KEY = "lca-lang";
  const store = {
    get() { try { return localStorage.getItem(STORAGE_KEY); } catch { return null; } },
    set(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch { /* storage unavailable */ } }
  };

  function detectLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "pt" || q === "en") return q;
    const saved = store.get();
    if (saved === "pt" || saved === "en") return saved;
    return (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
  }

  let typingToken = 0;
  function typeTerminal(lang) {
    const el = document.getElementById("term");
    if (!el) return;
    const token = ++typingToken;
    const lines = TERM[lang];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = (done, partial) => {
      el.replaceChildren();
      done.forEach(([text, cls]) => {
        const s = document.createElement("span");
        s.className = cls; s.textContent = text + "\n";
        el.appendChild(s);
      });
      if (partial) {
        const s = document.createElement("span");
        s.className = partial[1]; s.textContent = partial[0];
        el.appendChild(s);
      }
      const c = document.createElement("span");
      c.className = "cursor";
      el.appendChild(c);
    };

    if (reduce) { render(lines); return; }

    let i = 0, j = 0;
    const step = () => {
      if (token !== typingToken) return;
      if (i >= lines.length) { render(lines); return; }
      const [text, cls] = lines[i];
      if (cls !== "p") { i++; render(lines.slice(0, i)); setTimeout(step, 380); return; }
      j++;
      render(lines.slice(0, i), [text.slice(0, j), cls]);
      if (j >= text.length) { i++; j = 0; setTimeout(step, 260); }
      else setTimeout(step, 28 + Math.random() * 40);
    };
    step();
  }

  function applyLang(lang) {
    const dict = I18N[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      const v = dict[el.dataset.i18nAlt];
      if (v !== undefined) el.alt = v;
    });
    document.title = dict["meta.title"];
    const md = document.querySelector('meta[name="description"]');
    if (md) md.content = dict["meta.desc"];
    document.querySelectorAll(".lang button").forEach(b =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    typeTerminal(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    let current = detectLang();
    applyLang(current);

    document.querySelectorAll(".lang button").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang === current) return;
        current = lang;
        store.set(lang);
        applyLang(lang);
      });
    });

    // Mobile menu
    const menuBtn = document.getElementById("menuBtn");
    const links = document.getElementById("navLinks");
    const closeMenu = () => { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); };
    menuBtn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

    // Nav border on scroll
    const nav = document.querySelector(".nav");
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Active link + reveal on scroll
    if ("IntersectionObserver" in window) {
      const navMap = new Map([...links.querySelectorAll("a")].map(a => [a.getAttribute("href").slice(1), a]));
      const spy = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          navMap.forEach(a => a.classList.remove("active"));
          navMap.get(e.target.id)?.classList.add("active");
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      document.querySelectorAll("section[id]").forEach(s => spy.observe(s));

      const reveal = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } });
      }, { threshold: 0.12 });
      document.querySelectorAll(".section, .card, .job").forEach(el => { el.classList.add("reveal"); reveal.observe(el); });
    }

    document.getElementById("year").textContent = new Date().getFullYear();
  });
})();
