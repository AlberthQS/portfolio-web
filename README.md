# Portafolio web — Alberth Quiroga

Este repositorio contiene mi sitio personal. Reúne los proyectos que estoy desarrollando y las tecnologías que practico mientras estudio Ingeniería de Sistemas.

Es una web estática con **HTML, CSS y JavaScript**, adaptable a móviles y disponible en español e inglés.

## Qué incluye

- Presentación breve y enlaces a GitHub y LinkedIn.
- Sección de proyectos con acceso al sitio oficial de AUTOPROOF y al código de FocusBoard Lite.
- Selector de idioma español/inglés.
- Navegación con teclado y consideración por la preferencia de movimiento reducido.
- Idioma guardado en el navegador cuando el almacenamiento está disponible.
- Sin cookies de seguimiento ni librerías de terceros.

## Proyectos enlazados

| Proyecto | Descripción | Enlace |
| --- | --- | --- |
| AUTOPROOF | Proyecto propio para auditar conversaciones de agentes de IA. Su código no es público. | [Sitio oficial](https://autoproofsaas.pages.dev/) |
| FocusBoard Lite | Organizador local de tareas con JavaScript y pruebas de lógica. | [Repositorio](https://github.com/AlberthQS/focusboard-lite) |

## Ejecutar en local

Clona el repositorio y abre `index.html`, o inicia un servidor local:

```bash
git clone https://github.com/AlberthQS/portfolio-web.git
cd portfolio-web
python -m http.server 8000
```

Después visita `http://localhost:8000`. En Windows también puedes usar `py -m http.server 8000`.

## Estructura

```text
portfolio-web/
├── .github/workflows/   # Publicación automatizada
├── index.html           # Contenido y estructura
├── styles.css           # Estilos y diseño adaptable
├── script.js            # Traducciones e interacción
└── README.md            # Documentación
```

## Publicar en GitHub Pages

El repositorio incluye un flujo de despliegue. En **Settings → Pages**, selecciona **GitHub Actions** como origen. Al publicarse, la dirección esperada es `https://alberthqs.github.io/portfolio-web/`.

## Contacto

[LinkedIn](https://www.linkedin.com/in/alberth-quiroga-quiroga-silva-31929336b/) · [GitHub](https://github.com/AlberthQS)

---

**English:** Personal responsive portfolio built with HTML, CSS and JavaScript, with Spanish/English content. It showcases my learning projects and links to my professional profiles.
