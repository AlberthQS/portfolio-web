# Personal portfolio / Portafolio personal

A lightweight, responsive portfolio website in **Spanish and English**, using plain HTML, CSS and JavaScript. No framework, account or paid hosting required.

## Preview

Open `index.html` in a browser. Select **EN / ES** to switch languages.

## Features

- Responsive dark layout with accessible navigation
- Bilingual content (Spanish / English)
- Keyboard-friendly controls and reduced-motion support
- Language choice stored locally (when browser storage is available)
- No analytics, cookies or third-party JavaScript

## Run locally

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. You can also open the HTML file directly.

## Publish on GitHub Pages

Visit **Settings → Pages → Build and deployment → Deploy from a branch**, choose `main` and `/ (root)`, then save. After deployment, the site should be at https://alberthqs.github.io/portfolio-web/.

## Content notes

Personal project: [AUTOPROOF](https://autoproofsaas.pages.dev/). This site links to the product, but does **not** publish its private source code.

**Learning project:** this portfolio was prepared with AI assistance; review its code and customize the content as your skills grow.

## Structure

```text
portfolio-web/
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
```

The website logo uses the public image of the owner's GitHub profile.
