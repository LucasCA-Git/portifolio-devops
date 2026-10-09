# portifolio-devops

Portfólio pessoal de **Lucas Cardoso Alecrim** — DevOps Engineer.
🌐 https://lcaoficial.com.br

Site estático (HTML + CSS + JS puro, sem build), bilíngue PT/EN, tema dark, publicado via **GitHub Pages** com domínio próprio.

## Estrutura
```
index.html        # página única
styles.css        # tema dark
script.js         # i18n PT/EN, terminal animado, menu mobile
assets/           # foto + CV em PDF
CNAME             # domínio customizado do GitHub Pages
.nojekyll         # serve os arquivos como estão
```

## Rodar localmente
```bash
python3 -m http.server 8080   # http://localhost:8080
```

## Idioma
Detecta pelo navegador, lembra a escolha do usuário e aceita `?lang=pt` / `?lang=en`.
Textos ficam no objeto `I18N` em `script.js` (chaves `data-i18n` no HTML).

## Deploy
Push na `main` → GitHub Pages (Settings → Pages → Deploy from branch `main` / root).
