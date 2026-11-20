"use strict";
const translations = {
  es: {
    navAbout:"Sobre mí",navProjects:"Proyectos",navLearning:"Aprendizaje",navContact:"Contacto",
    eyebrow:"Estudiante de Ingeniería de Sistemas · Colombia",
    title:"Aprender. Crear.<br><span>Seguir mejorando.</span>",
    heroDescription:"Me interesa la tecnología, el desarrollo de proyectos reales y transformar ideas en soluciones digitales útiles. Este espacio muestra lo que voy construyendo.",
    seeProjects:"Explorar proyectos <span aria-hidden='true'>↗</span>",aboutLabel:"01 / SOBRE MÍ",aboutTitle:"Curiosidad y constancia.",
    aboutText:"Soy estudiante de Ingeniería de Sistemas. Estoy fortaleciendo mis fundamentos de programación, bases de datos y desarrollo web mientras trabajo en proyectos personales y académicos.",
    aboutSmall:"Busco oportunidades para aprender, colaborar y seguir creciendo. Este portafolio presenta trabajo y aprendizaje, sin exagerar mi experiencia.",
    projectsLabel:"02 / PROYECTOS",projectsTitle:"Proyectos seleccionados.",projectsNote:"Ideas que se convierten en productos y práctica.",
    personalProject:"PROYECTO PERSONAL",practiceProject:"PROYECTO DE PRÁCTICA",
    autoproofText:"Proyecto SaaS personal con presencia web pública. Desarrollo e iteración continua de una idea de negocio digital.",
    entrepreneurship:"Emprendimiento",visitWeb:"Visitar sitio ↗",
    focusboardText:"Aplicación sencilla para organizar tareas. Usa JavaScript y guarda la información localmente en el navegador.",seeRepository:"Ver repositorio ↗",
    learningLabel:"03 / APRENDIZAJE",learningTitle:"Construyendo fundamentos.",learningText:"Tecnologías y herramientas que estudio o practico actualmente. No representa un nivel de dominio profesional.",
    contactLabel:"04 / CONTACTO",contactTitle:"¿Hablamos?",contactText:"Estoy abierto a oportunidades de aprendizaje, prácticas y colaboraciones.",connectGithub:"Conectar en GitHub ↗",footerText:"Creado con HTML, CSS y JavaScript."
  },
  en: {
    navAbout:"About",navProjects:"Projects",navLearning:"Learning",navContact:"Contact",
    eyebrow:"Systems Engineering Student · Colombia",
    title:"Learn. Build.<br><span>Keep improving.</span>",
    heroDescription:"I'm interested in technology, real projects, and turning ideas into useful digital solutions. This space shows what I'm building and learning.",
    seeProjects:"Explore projects <span aria-hidden='true'>↗</span>",aboutLabel:"01 / ABOUT",aboutTitle:"Curiosity and consistency.",
    aboutText:"I'm a Systems Engineering student strengthening my foundations in programming, databases, and web development while working on personal and academic projects.",
    aboutSmall:"I'm interested in opportunities to learn, collaborate, and grow. This portfolio reflects my work and learning journey without overstating experience.",
    projectsLabel:"02 / PROJECTS",projectsTitle:"Selected projects.",projectsNote:"Ideas turned into products and practice.",
    personalProject:"PERSONAL PROJECT",practiceProject:"LEARNING PROJECT",
    autoproofText:"A personal SaaS project with a public website, as I iterate on a digital business idea.",
    entrepreneurship:"Entrepreneurship",visitWeb:"Visit website ↗",
    focusboardText:"A simple task management app built with JavaScript that saves tasks locally in your browser.",seeRepository:"View repository ↗",
    learningLabel:"03 / LEARNING",learningTitle:"Building the fundamentals.",learningText:"Technologies and tools I'm currently learning or practicing. Not a claim of professional mastery.",
    contactLabel:"04 / CONTACT",contactTitle:"Let's connect.",contactText:"Open to learning opportunities, internships, and collaboration.",connectGithub:"Connect on GitHub ↗",footerText:"Built with HTML, CSS and JavaScript."
  }
};
const languageSwitch = document.querySelector('#languageSwitch');
const year = document.querySelector('#year');
if(year) year.textContent = String(new Date().getFullYear());
function setLanguage(lang) {
  if(!(lang in translations)) return;
  document.documentElement.lang = lang;
  for (const node of document.querySelectorAll('[data-i18n]')) {
    const text = translations[lang][node.dataset.i18n];
    if (typeof text !== 'string') continue;
    // Static developer-controlled HTML only, never input from the visitor.
    if (node.dataset.i18n === 'title' || node.dataset.i18n === 'seeProjects') node.innerHTML = text;
    else node.textContent = text;
  }
  languageSwitch.textContent = lang === 'es' ? 'EN' : 'ES';
  languageSwitch.setAttribute('aria-label',lang === 'es' ? 'Switch to English' : 'Cambiar a español');
  try { localStorage.setItem('portfolioLanguage',lang); } catch { /* storage blocked */ }
}
let saved = 'es';
try { saved = localStorage.getItem('portfolioLanguage') || 'es'; } catch { /* storage blocked */ }
setLanguage(saved === 'en' ? 'en' : 'es');
languageSwitch.addEventListener('click',()=>setLanguage(document.documentElement.lang === 'es' ? 'en':'es'));
