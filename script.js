(() => {
  "use strict";

  const I18N = {
    pt: {
      "skip": "Pular para o conteúdo",
      "nav.about": "Sobre", "nav.stack": "Stack", "nav.exp": "Experiência", "nav.edu": "Formação", "nav.contact": "Contato",
      "hero.status": "Disponível para novas oportunidades",
      "hero.lead": "Automatizo o caminho do código até a produção — pipelines de CI/CD, infraestrutura como código, containers e observabilidade — para que times de desenvolvimento entreguem com rapidez e segurança.",
      "hero.cta1": "Fale comigo", "hero.cta2": "Baixar CV",
      "hero.photoAlt": "Foto de Lucas Cardoso Alecrim",
      "about.title": "Sobre mim",
      "about.p1": "DevOps Engineer focado em automação e entrega contínua: pipelines de CI/CD, infraestrutura como código, containers e observabilidade, em ambientes cloud e on-premises de alto tráfego no setor de iGaming.",
      "about.p2": "Minha base veio do Suporte N2/N3 — e foi lá que aprendi a ir até a causa raiz de incidentes em produção. Hoje uso isso para construir ambientes escaláveis, seguros e altamente disponíveis, automatizando processos e reduzindo falhas operacionais.",
      "about.s1": "anos entre suporte, operações e DevOps", "about.s2": "multicloud: Azure, AWS e OCI",
      "about.s3": "certificações e formações", "about.s4": "inglês profissional",
      "stack.title": "Stack técnica", "stack.infra": "Containers, Cloud & Linux", "stack.obs": "Observabilidade",
      "stack.alerts": "Monitoramento & Alertas", "stack.auto": "Automação & Scripting", "stack.db": "Bancos de dados",
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
      "nav.recs": "Recomendações",
      "recs.title": "Recomendações",
      "recs.lead": "O que colegas de trabalho dizem sobre mim no LinkedIn.",
      "recs.note": "",
      "recs.more": "Ver no LinkedIn →",
      "recs.r1.rel": "Trabalhou na mesma equipe · jun 2026",
      "recs.r1.q": "Trabalhei com o Lucas e posso dizer que ele é um profissional muito dedicado e parceiro. Sempre foi uma pessoa sociável, que se relaciona bem com todos e está pronta para ajudar quando necessário. É esforçado, comprometido e encara os desafios com responsabilidade. Com certeza será uma ótima adição para qualquer equipe.",
      "recs.r2.rel": "Sênior na equipe de DevOps da Xerlock · jun 2026",
      "recs.r2.q": "Trabalhei diretamente com Lucas na equipe de DevOps da Xerlock. Como estagiário ele sempre foi extremamente interessado em entender os processos fim-a-fim e sempre disposto a trazer novas ideias para traçar os caminhos mais eficientes. Uma característica muito importante numa área em que automatizamos e damos manutenção na infraestrutura que funciona de plataforma para toda a aplicação. Além da parte técnica, Lucas tem uma habilidade intersocial ímpar, sempre com muita empatia e vontade genuína de colaborar com o ambiente de trabalho e com as tarefas desenvolvidas pelo time.",
      "recs.r3.rel": "Trabalhou na mesma equipe · mar 2024",
      "recs.r3.q": "Profissional extremamente dedicado, capaz de se entregar por completo ao que lhe é pedido, diante da sua função. Alguém capaz de proporcionar um ambiente amigável e empenhado em cumprir demandas com seus colegas.",
      "recs.r4.rel": "Trabalhou na mesma equipe · mar 2024",
      "recs.r4.q": "Lucas é um profissional muito competente e com vasta experiência. Ele é capaz de resolver problemas complexos tanto em hardwares como em softwares. É um colaborador valioso em qualquer ambiente de trabalho e em qualquer equipe. Ele é paciente, trabalha bem em equipe, é focado e empenhado. Além disso, ele é um excelente comunicador, tem uma grande capacidade de resolver problemas e é muito organizado em sua gestão de tempo pessoal.",
      "nav.devops": "DevOps",
      "devops.title": "DevOps na prática",
      "devops.lead": "Meu trabalho é encurtar e proteger o caminho entre o commit e a produção. É assim que cada etapa do ciclo aparece no meu dia a dia:",
      "devops.plan.n": "Planejar",
      "devops.plan.d": "Sprints e backlog junto com o time de desenvolvimento.",
      "devops.code.n": "Versionar",
      "devops.code.d": "Aplicação, configuração e infraestrutura versionadas em Git.",
      "devops.build.n": "Build",
      "devops.build.d": "Imagens Docker enxutas e reprodutíveis, com boas práticas.",
      "devops.test.n": "Validar",
      "devops.test.d": "Etapas de validação automatizadas dentro do pipeline.",
      "devops.provision.n": "Provisionar",
      "devops.provision.d": "Infraestrutura como código e configuração automatizada.",
      "devops.deploy.n": "Deploy",
      "devops.deploy.d": "Deploys automatizados em desenvolvimento, homologação e produção.",
      "devops.operate.n": "Operar",
      "devops.operate.d": "Nginx, TLS, DNS e permissões (ACL) em servidores Linux.",
      "devops.monitor.n": "Observar",
      "devops.monitor.d": "Logs, métricas e alertas para agir antes do usuário perceber.",
      "devops.loop": "↺ feedback: incidentes e métricas viram melhorias no próximo ciclo",
      "devops.p1.t": "Automatize o que se repete",
      "devops.p1.d": "Tarefa manual recorrente vira script, playbook ou etapa de pipeline.",
      "devops.p2.t": "Causa raiz, não sintoma",
      "devops.p2.d": "Herança do N2/N3: incidente só fecha quando eu entendo por que aconteceu.",
      "devops.p3.t": "Observabilidade primeiro",
      "devops.p3.d": "Logs e alertas bem feitos encurtam o tempo até a correção.",
      "devops.p4.t": "Dev e Ops no mesmo time",
      "devops.p4.d": "Lado a lado com os devs em incidentes, deploys e otimização de produção.",
      "contact.title": "Vamos conversar",
      "contact.lead": "Aberto a oportunidades em DevOps, SRE e Cloud — remoto ou em Recife. Respondo rápido.",
      "contact.loc": "local",
      "meta.title": "Lucas Alecrim · DevOps Engineer",
      "meta.desc": "Lucas Cardoso Alecrim — DevOps Engineer em Recife. CI/CD, infraestrutura como código (Terraform, Ansible), Docker, observabilidade e cloud (Azure, AWS)."
    },
    en: {
      "skip": "Skip to content",
      "nav.about": "About", "nav.stack": "Stack", "nav.exp": "Experience", "nav.edu": "Education", "nav.contact": "Contact",
      "hero.status": "Open to new opportunities",
      "hero.lead": "I automate the path from code to production — CI/CD pipelines, infrastructure as code, containers and observability — so development teams can ship fast and safely.",
      "hero.cta1": "Get in touch", "hero.cta2": "Download CV",
      "hero.photoAlt": "Photo of Lucas Cardoso Alecrim",
      "about.title": "About me",
      "about.p1": "DevOps Engineer focused on automation and continuous delivery: CI/CD pipelines, infrastructure as code, containers and observability, across high-traffic cloud and on-premises environments in the iGaming industry.",
      "about.p2": "My foundation comes from L2/L3 Support — that's where I learned to chase production incidents down to their root cause. Today I use that to build scalable, secure and highly available environments, automating processes and reducing operational failures.",
      "about.s1": "years across support, operations and DevOps", "about.s2": "multicloud: Azure, AWS & OCI",
      "about.s3": "certifications & courses", "about.s4": "professional working English",
      "stack.title": "Tech stack", "stack.infra": "Containers, Cloud & Linux", "stack.obs": "Observability",
      "stack.alerts": "Monitoring & Alerting", "stack.auto": "Automation & Scripting", "stack.db": "Databases",
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
      "nav.recs": "Recommendations",
      "recs.title": "Recommendations",
      "recs.lead": "What colleagues say about me on LinkedIn.",
      "recs.note": "Translated from Portuguese.",
      "recs.more": "View on LinkedIn →",
      "recs.r1.rel": "Worked on the same team · Jun 2026",
      "recs.r1.q": "I worked with Lucas and can say he is a very dedicated professional and a great teammate. He has always been sociable, gets along well with everyone and is ready to help whenever needed. He is hard-working, committed and faces challenges responsibly. He will certainly be a great addition to any team.",
      "recs.r2.rel": "Senior on Xerlock's DevOps team · Jun 2026",
      "recs.r2.q": "I worked directly with Lucas on Xerlock's DevOps team. As an intern he was always extremely interested in understanding processes end-to-end and always willing to bring new ideas to find the most efficient paths — a very important trait in an area where we automate and maintain the infrastructure that serves as the platform for the entire application. Beyond the technical side, Lucas has outstanding interpersonal skills, always showing empathy and a genuine willingness to contribute to the work environment and to the team's tasks.",
      "recs.r3.rel": "Worked on the same team · Mar 2024",
      "recs.r3.q": "An extremely dedicated professional, able to give himself completely to whatever is asked of him in his role. Someone who fosters a friendly environment and is committed to delivering alongside his colleagues.",
      "recs.r4.rel": "Worked on the same team · Mar 2024",
      "recs.r4.q": "Lucas is a very competent professional with broad experience. He can solve complex problems in both hardware and software. He is a valuable contributor in any workplace and any team. He is patient, works well in a team, and is focused and committed. He is also an excellent communicator, has a great problem-solving ability and is very organized in managing his time.",
      "nav.devops": "DevOps",
      "devops.title": "DevOps in practice",
      "devops.lead": "My job is to shorten and protect the path from commit to production. Here's how each stage of the loop shows up in my day-to-day:",
      "devops.plan.n": "Plan",
      "devops.plan.d": "Sprints and backlog together with the development team.",
      "devops.code.n": "Version",
      "devops.code.d": "Application, configuration and infrastructure versioned in Git.",
      "devops.build.n": "Build",
      "devops.build.d": "Lean, reproducible Docker images following best practices.",
      "devops.test.n": "Validate",
      "devops.test.d": "Automated validation steps inside the pipeline.",
      "devops.provision.n": "Provision",
      "devops.provision.d": "Infrastructure as code and automated configuration.",
      "devops.deploy.n": "Deploy",
      "devops.deploy.d": "Automated deployments across development, staging and production.",
      "devops.operate.n": "Operate",
      "devops.operate.d": "Nginx, TLS, DNS and permissions (ACL) on Linux servers.",
      "devops.monitor.n": "Observe",
      "devops.monitor.d": "Logs, metrics and alerts to act before users notice.",
      "devops.loop": "↺ feedback: incidents and metrics become improvements in the next cycle",
      "devops.p1.t": "Automate what repeats",
      "devops.p1.d": "A recurring manual task becomes a script, a playbook or a pipeline step.",
      "devops.p2.t": "Root cause, not symptoms",
      "devops.p2.d": "Inherited from L2/L3 support: an incident only closes once I understand why it happened.",
      "devops.p3.t": "Observability first",
      "devops.p3.d": "Good logs and alerts shorten the time to a fix.",
      "devops.p4.t": "Dev and Ops on one team",
      "devops.p4.d": "Side by side with developers on incidents, deploys and production tuning.",
      "contact.title": "Let's talk",
      "contact.lead": "Open to DevOps, SRE and Cloud opportunities — remote or in Recife. I reply fast.",
      "contact.loc": "location",
      "meta.title": "Lucas Alecrim · DevOps Engineer",
      "meta.desc": "Lucas Cardoso Alecrim — DevOps Engineer based in Recife, Brazil. CI/CD, infrastructure as code (Terraform, Ansible), Docker, observability and cloud (Azure, AWS)."
    }
  };

  const TERM = {
    pt: [
      ["$ git push origin main", "p"], ["pipeline #482 → lint ✓ test ✓ build ✓", "o"],
      ["$ terraform plan", "p"], ["Plan: 2 to add, 0 to change, 0 to destroy.", "o"],
      ["$ ansible-playbook deploy.yml -l prod", "p"], ["PLAY RECAP ok=12 changed=3 failed=0", "ok"],
      ["$ curl -sI https://lcaoficial.com.br | head -1", "p"], ["HTTP/2 200 ✓", "ok"]
    ],
    en: [
      ["$ git push origin main", "p"], ["pipeline #482 → lint ✓ test ✓ build ✓", "o"],
      ["$ terraform plan", "p"], ["Plan: 2 to add, 0 to change, 0 to destroy.", "o"],
      ["$ ansible-playbook deploy.yml -l prod", "p"], ["PLAY RECAP ok=12 changed=3 failed=0", "ok"],
      ["$ curl -sI https://lcaoficial.com.br | head -1", "p"], ["HTTP/2 200 ✓", "ok"]
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
      document.querySelectorAll(".section, .card, .job, .rec, .stage").forEach(el => { el.classList.add("reveal"); reveal.observe(el); });
    }

    document.getElementById("year").textContent = new Date().getFullYear();
  });
})();
