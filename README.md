# Portfólio · IruyCode

Site pessoal de **Yuri Banzato** — [portfolio.iruycode.com](https://portfolio.iruycode.com)

## ⚠️ Qual é a versão atual?

**`master` é sempre a versão oficial e mais atualizada.** É esta que está publicada.

| Referência | O que é |
|---|---|
| `master` | **Versão atual (v2)** — site estático, tema terminal/dev, trilingue |
| tag `v2` | Marco da versão 2 (redesign de 2026) |
| tag `v1` | Versão anterior — código-fonte do site original em **Astro** |
| tag `v1-deploy` | Versão anterior — build estático que estava publicado |

Para comparar a versão atual com a antiga:

```bash
git diff v1 master          # diferenças vs. código-fonte Astro antigo
git diff v1-deploy master   # diferenças vs. build antigo publicado
git checkout v1             # ver a versão antiga completa (detached HEAD)
```

## Estrutura (v2)

Site **100% estático** — sem build, é editar e publicar:

```
index.html      página principal (single-page: hero, sobre, percurso, trabalhos, contacto)
styles.css      estilos (tema dark terminal/dev)
app.js          interações (typewriter, reveal, galeria, formulário, partículas)
i18n.js         sistema de 3 idiomas (PT/EN/ES) — dicionário + engine
card/           cartão digital (link-in-bio) — alvo do QR code
  index.html    página com portfólio, LinkedIn e GitHub
  qr.html       ver/descarregar/imprimir o QR code
  qr.svg|png    QR code → https://portfolio.iruycode.com/card/
imgs/           imagens (avatar, projetos, eventos)
```

### Traduções (i18n)

Os textos traduzíveis têm `data-i18n="chave"` (ou `data-i18n-ph` para placeholders) no
HTML, e a chave tem de existir nos **três** idiomas no dicionário de `i18n.js`.
A escolha do utilizador fica em `localStorage` (`iruy_lang`).

### Cache

Os assets são referenciados com query de versão (`styles.css?v=...`).
**Sempre que editares `styles.css`, `app.js` ou `i18n.js`, incrementa o `?v=` no
`index.html`** — caso contrário os visitantes continuam a ver a versão antiga em cache.

## Histórico

- **v2 (2026)** — redesign completo: tema terminal/dev, i18n client-side PT/EN/ES,
  skills por área, timeline com filtros, cartão digital com QR code.
- **v1 (2024–2025)** — site original construído em Astro (tags `v1` e `v1-deploy`).
