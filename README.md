# portifolio-devops

Portfólio pessoal de **Lucas Cardoso Alecrim**, DevOps Engineer.
https://lcaoficial.com.br

React 18 + TypeScript + Vite + [Mantine](https://mantine.dev), bilíngue PT/EN, tema dark com terminal animado.
Deploy automático no GitHub Pages via GitHub Actions a cada push na `main`.

## Rodar localmente

```bash
npm ci
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
src/dict.ts               # todos os textos (PT e EN) e o roteiro do terminal
src/links.ts              # e-mail, WhatsApp, LinkedIn, GitHub, CV
src/i18n.tsx              # idioma: ?lang=pt|en, escolha salva, detecção do navegador
src/site.css              # visual (cores, layout, animações)
src/theme.ts              # tema Mantine
src/components/           # Nav, Hero, Terminal e as seções
public/                   # foto, CV em PDF, favicon e CNAME
.github/workflows/deploy.yml
```

Para mudar qualquer texto, edite `src/dict.ts`.

## Deploy

Settings → Pages → Source: **GitHub Actions**. O workflow faz `npm ci`, `npm run build` e publica `dist/`.
