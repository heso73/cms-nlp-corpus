/**
 * CMS Navigation Fix — caribbeanmetadata.org
 * VERSION PREMIUM v3.1 — FR + EN + ES
 * Hamburger groupé + footer premium DM Serif/Mono
 * Cache-bust: 20260611-203547
 */

(function () {
  'use strict';

  const page = window.location.pathname.split('/').pop() || 'index.html';
  const lang = page.endsWith('-es.html') ? 'es'
             : page.endsWith('-en.html') ? 'en'
             : 'fr';
  const basePage = page.replace(/-en\.html$/, '').replace(/-es\.html$/, '').replace(/\.html$/, '');

  const STAY_FR = ['resources','glossaire','developers','architecture','validator','cms-builder','press','catalogue','kit','spec','certification','submit'];
  const NO_EN   = ['glossaire','architecture','press'];

  function pageFor(l) {
    if (l === 'fr') return basePage + '.html';
    if (l === 'es' && STAY_FR.includes(basePage)) return basePage + '.html';
    if (l === 'en' && NO_EN.includes(basePage)) return 'index-en.html';
    return basePage + '-' + l + '.html';
  }

  // Nav principale — liens visibles dans la barre (desktop)
  const NAV_MAIN = {
    fr: [
      { href: 'about.html',       label: 'À propos' },
      { href: 'families.html',    label: 'Les 6 familles' },
      { href: 'catalogue.html',   label: 'Catalogue' },
      { href: 'resources.html',   label: 'Ressources' },
      { href: 'certification.html', label: 'Registre' },
      { href: 'submit.html',      label: 'Certifier', cta: true },
    ],
    en: [
      { href: 'about-en.html',    label: 'About' },
      { href: 'families-en.html', label: '6 Families' },
      { href: 'catalogue.html',   label: 'Catalogue' },
      { href: 'resources.html',   label: 'Resources' },
      { href: 'certification.html', label: 'Registry' },
      { href: 'submit.html',      label: 'Certify', cta: true },
    ],
    es: [
      { href: 'about-es.html',    label: 'Acerca de' },
      { href: 'families-es.html', label: '6 Familias' },
      { href: 'catalogue.html',   label: 'Catálogo' },
      { href: 'resources.html',   label: 'Recursos' },
      { href: 'certification.html', label: 'Registro' },
      { href: 'submit.html',      label: 'Certificar', cta: true },
    ]
  };

  // Hamburger — menu complet groupé par sections
  const NAV_GROUPS = {
    fr: [
      { title: 'Le Standard', links: [
        { href: 'about.html',       label: 'À propos du CMS' },
        { href: 'families.html',    label: 'Les 6 familles' },
        { href: 'spec.html',        label: 'Spécification v2.0' },
        { href: 'declaration.html', label: 'Déclaration fondatrice' },
        { href: 'roadmap.html',     label: 'Roadmap 2026–2028' },
      ]},
      { title: 'Certification', links: [
        { href: 'certification.html', label: 'Registre public CMS', badge: 'LIVE' },
        { href: 'submit.html',        label: 'Soumettre une œuvre', badge: 'GRATUIT' },
        { href: 'validator.html',     label: 'Validateur JSON' },
        { href: 'catalogue.html',     label: 'Catalogue CMS v2.0' },
      ]},
      { title: 'Ressources', links: [
        { href: 'resources.html',  label: 'Documentation officielle' },
        { href: 'glossaire.html',  label: 'Glossaire caribéen' },
        { href: 'kit.html',        label: 'Kit Média' },
        { href: 'developers.html', label: 'API & Développeurs' },
      ]},
      { title: 'Communauté', links: [
        { href: 'lab.html',         label: 'Caribwood Language Lab' },
        { href: 'collaborate.html', label: 'Collaborer' },
        { href: 'founders.html',    label: 'Les 100 Premiers' },
        { href: 'contact.html',     label: 'Contact' },
      ]},
    ],
    en: [
      { title: 'The Standard', links: [
        { href: 'about-en.html',       label: 'About CMS' },
        { href: 'families-en.html',    label: 'The 6 Families' },
        { href: 'spec.html',           label: 'Specification v2.0' },
        { href: 'declaration-en.html', label: 'Founding Declaration' },
        { href: 'roadmap.html',        label: 'Roadmap 2026–2028' },
      ]},
      { title: 'Certification', links: [
        { href: 'certification.html', label: 'CMS Public Registry', badge: 'LIVE' },
        { href: 'submit.html',        label: 'Submit a work', badge: 'FREE' },
        { href: 'validator.html',     label: 'JSON Validator' },
        { href: 'catalogue.html',     label: 'CMS Catalogue v2.0' },
      ]},
      { title: 'Resources', links: [
        { href: 'resources.html',  label: 'Official Documentation' },
        { href: 'glossaire.html',  label: 'Caribbean Glossary' },
        { href: 'kit.html',        label: 'Media Kit' },
        { href: 'developers.html', label: 'API & Developers' },
      ]},
      { title: 'Community', links: [
        { href: 'lab-en.html',         label: 'Caribwood Language Lab' },
        { href: 'collaborate-en.html', label: 'Collaborate' },
        { href: 'founders-en.html',    label: 'The 100 Founders' },
        { href: 'contact-en.html',     label: 'Contact' },
      ]},
    ],
    es: [
      { title: 'El Estándar', links: [
        { href: 'about-es.html',       label: 'Acerca del CMS' },
        { href: 'families-es.html',    label: 'Las 6 familias' },
        { href: 'spec.html',           label: 'Especificación v2.0' },
        { href: 'declaration-es.html', label: 'Declaración Fundadora' },
        { href: 'roadmap.html',        label: 'Roadmap 2026–2028' },
      ]},
      { title: 'Certificación', links: [
        { href: 'certification.html', label: 'Registro público CMS', badge: 'LIVE' },
        { href: 'submit.html',        label: 'Enviar una obra', badge: 'GRATIS' },
        { href: 'validator.html',     label: 'Validador JSON' },
        { href: 'catalogue.html',     label: 'Catálogo CMS v2.0' },
      ]},
      { title: 'Recursos', links: [
        { href: 'resources.html',  label: 'Documentación oficial' },
        { href: 'glossaire.html',  label: 'Glosario caribeño' },
        { href: 'kit.html',        label: 'Kit de Medios' },
        { href: 'developers.html', label: 'API & Desarrolladores' },
      ]},
      { title: 'Comunidad', links: [
        { href: 'lab-es.html',         label: 'Caribwood Language Lab' },
        { href: 'collaborate-es.html', label: 'Colaborar' },
        { href: 'founders-es.html',    label: 'Los 100 Primeros' },
        { href: 'contact-es.html',     label: 'Contacto' },
      ]},
    ]
  };

  const FOOTER = {
    fr: {
      tagline: 'Structurer la visibilité culturelle caribéenne. Un projet du Caribwood Language Lab — Guadeloupe.',
      cols: [
        { title: 'Le Standard', links: [
          { href: 'about.html',       label: 'À propos' },
          { href: 'families.html',    label: 'Les 6 familles' },
          { href: 'spec.html',        label: 'Spécification v2.0' },
          { href: 'catalogue.html',   label: 'Catalogue CMS' },
          { href: 'kit.html',         label: 'Kit Média' },
          { href: 'declaration.html', label: 'Déclaration fondatrice' },
          { href: 'roadmap.html',     label: 'Roadmap 2026–2028' },
        ]},
        { title: 'Certification', links: [
          { href: 'certification.html', label: 'Registre public CMS' },
          { href: 'submit.html',        label: 'Soumettre une œuvre' },
          { href: 'validator.html',     label: 'Validateur JSON' },
          { href: 'glossaire.html',     label: 'Glossaire caribéen' },
          { href: 'resources.html',     label: 'Documentation' },
          { href: 'developers.html',    label: 'API & Développeurs' },
        ]},
        { title: 'Communauté', links: [
          { href: 'lab.html',         label: 'Caribwood Language Lab' },
          { href: 'collaborate.html', label: 'Collaborer' },
          { href: 'founders.html',    label: 'Les 100 Premiers' },
          { href: 'contact.html',     label: 'Contact' },
          { href: 'press-fr.html',    label: 'Presse' },
        ]},
      ]
    },
    en: {
      tagline: 'Structuring Caribbean cultural visibility. A Caribwood Language Lab project — Guadeloupe.',
      cols: [
        { title: 'The Standard', links: [
          { href: 'about-en.html',       label: 'About' },
          { href: 'families-en.html',    label: 'The 6 Families' },
          { href: 'spec.html',           label: 'Specification v2.0' },
          { href: 'catalogue.html',      label: 'CMS Catalogue' },
          { href: 'kit.html',            label: 'Media Kit' },
          { href: 'declaration-en.html', label: 'Founding Declaration' },
          { href: 'roadmap.html',        label: 'Roadmap 2026–2028' },
        ]},
        { title: 'Certification', links: [
          { href: 'certification.html', label: 'CMS Public Registry' },
          { href: 'submit.html',        label: 'Submit a work' },
          { href: 'validator.html',     label: 'JSON Validator' },
          { href: 'glossaire.html',     label: 'Caribbean Glossary' },
          { href: 'resources.html',     label: 'Documentation' },
          { href: 'developers.html',    label: 'API & Developers' },
        ]},
        { title: 'Community', links: [
          { href: 'lab-en.html',         label: 'Caribwood Language Lab' },
          { href: 'collaborate-en.html', label: 'Collaborate' },
          { href: 'founders-en.html',    label: 'The 100 Founders' },
          { href: 'contact-en.html',     label: 'Contact' },
          { href: 'press-en.html',       label: 'Press' },
        ]},
      ]
    },
    es: {
      tagline: 'Estructurando la visibilidad cultural caribeña. Un proyecto de Caribwood Language Lab — Guadalupe.',
      cols: [
        { title: 'El Estándar', links: [
          { href: 'about-es.html',       label: 'Acerca de' },
          { href: 'families-es.html',    label: 'Las 6 familias' },
          { href: 'spec.html',           label: 'Especificación v2.0' },
          { href: 'catalogue.html',      label: 'Catálogo CMS' },
          { href: 'kit.html',            label: 'Kit de Medios' },
          { href: 'declaration-es.html', label: 'Declaración Fundadora' },
          { href: 'roadmap.html',        label: 'Roadmap 2026–2028' },
        ]},
        { title: 'Certificación', links: [
          { href: 'certification.html', label: 'Registro público CMS' },
          { href: 'submit.html',        label: 'Enviar una obra' },
          { href: 'validator.html',     label: 'Validador JSON' },
          { href: 'glossaire.html',     label: 'Glosario caribeño' },
          { href: 'resources.html',     label: 'Documentación' },
          { href: 'developers.html',    label: 'API & Desarrolladores' },
        ]},
        { title: 'Comunidad', links: [
          { href: 'lab-es.html',         label: 'Caribwood Language Lab' },
          { href: 'collaborate-es.html', label: 'Colaborar' },
          { href: 'founders-es.html',    label: 'Los 100 Primeros' },
          { href: 'contact-es.html',     label: 'Contacto' },
          { href: 'press-es.html',       label: 'Prensa' },
        ]},
      ]
    }
  };

  const CSS = `
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

    /* ── NAV BAR ── */
    nav:not(.families-anchor-nav) {
      position: fixed !important; top: 0 !important; left: 0 !important; right: 0 !important;
      z-index: 1000 !important;
      background: rgba(255,255,255,0.97) !important;
      backdrop-filter: blur(12px) !important;
      -webkit-backdrop-filter: blur(12px) !important;
      border-bottom: 1px solid rgba(0,62,107,0.08) !important;
      padding: 0 6% !important; height: 68px !important;
      display: flex !important; align-items: center !important;
      justify-content: space-between !important;
      gap: 12px !important; box-sizing: border-box !important; width: 100% !important;
    }
    body { padding-top: 68px !important; }

    /* Logo */
    nav .cms-logo {
      font-family: 'DM Mono', monospace !important;
      font-size: 16px !important; font-weight: 500 !important;
      color: #003E6B !important; text-decoration: none !important;
      letter-spacing: 3px !important; flex-shrink: 0 !important;
    }

    /* Desktop links */
    nav .nav-links { display: flex; gap: 2px; list-style: none; align-items: center; flex: 1; flex-wrap: nowrap; justify-content: flex-end; }
    nav .nav-links a {
      font-family: 'DM Sans', sans-serif !important;
      font-size: 13px !important; color: #444 !important;
      text-decoration: none !important; font-weight: 500 !important;
      padding: 6px 10px; border-radius: 5px;
      transition: all .2s !important; white-space: nowrap;
    }
    nav .nav-links a:hover { background: rgba(0,62,107,0.05); color: #003E6B !important; }
    nav .nav-links a.active { color: #003E6B !important; font-weight: 700 !important; }
    nav .nav-links a.nav-cta {
      background: linear-gradient(135deg,#0f3d6b,#0f6fa6) !important;
      color: #fff !important; padding: 8px 16px !important;
      border-radius: 6px !important; font-weight: 700 !important;
      font-size: 12px !important; letter-spacing: .3px;
    }
    nav .nav-links a.nav-cta:hover { opacity: .9 !important; transform: translateY(-1px); }

    /* Lang switcher */
    .cms-lang-switcher { display: flex; align-items: center; gap: 2px; flex-shrink: 0; margin-left: 8px; }
    .cms-lang-switcher a {
      font-family: 'DM Mono', monospace !important;
      font-size: 10px !important; font-weight: 700 !important;
      padding: 4px 8px !important; border-radius: 4px !important;
      text-decoration: none !important; transition: all .2s !important;
      letter-spacing: 1px;
    }
    .cms-lang-switcher a.lang-active { background: #003E6B !important; color: #fff !important; }
    .cms-lang-switcher a:not(.lang-active) { color: #888 !important; border: 1px solid rgba(0,62,107,0.15) !important; }
    .cms-lang-switcher a:not(.lang-active):hover { border-color: #003E6B !important; color: #003E6B !important; }

    /* Hamburger button */
    .nav-burger {
      display: none; flex-direction: column; justify-content: center;
      gap: 5px; width: 38px; height: 38px; cursor: pointer;
      background: none; border: 1.5px solid rgba(0,62,107,0.12);
      border-radius: 7px; padding: 8px; flex-shrink: 0;
      transition: border-color .2s;
    }
    .nav-burger:hover { border-color: rgba(0,62,107,0.3); }
    .nav-burger span { display: block; height: 2px; background: #003E6B; border-radius: 2px; transition: all .3s; }
    .nav-burger.open { border-color: #003E6B; background: rgba(0,62,107,0.04); }
    .nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .nav-burger.open span:nth-child(2) { opacity: 0; }
    .nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    /* ── HAMBURGER MENU PANEL ── */
    .nav-mega {
      display: none; position: fixed; top: 68px; left: 0; right: 0;
      background: #fff; z-index: 998;
      border-bottom: 1px solid rgba(0,62,107,0.08);
      box-shadow: 0 16px 48px rgba(0,0,0,0.12);
      max-height: calc(100vh - 68px); overflow-y: auto;
      padding: 32px 6% 40px;
    }
    .nav-mega.open { display: block; }
    .nav-mega-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      max-width: 1100px;
      margin: 0 auto;
    }
    .nav-mega-section {}
    .nav-mega-title {
      font-family: 'DM Mono', monospace !important;
      font-size: 9px !important; letter-spacing: 3px !important;
      color: #00C2C7 !important; text-transform: uppercase !important;
      margin-bottom: 16px !important; padding-bottom: 10px !important;
      border-bottom: 1px solid rgba(0,62,107,0.08) !important;
      font-weight: 700 !important;
    }
    .nav-mega-links { list-style: none; padding: 0; margin: 0; }
    .nav-mega-links li { margin-bottom: 2px; }
    .nav-mega-links a {
      font-family: 'DM Sans', sans-serif !important;
      font-size: 14px !important; color: #333 !important;
      text-decoration: none !important; font-weight: 500 !important;
      display: flex !important; align-items: center !important;
      gap: 8px !important; padding: 9px 10px !important;
      border-radius: 7px !important; transition: all .15s !important;
    }
    .nav-mega-links a:hover { background: rgba(0,62,107,0.05) !important; color: #003E6B !important; }
    .nav-mega-links a.active { color: #003E6B !important; font-weight: 700 !important; background: rgba(0,62,107,0.04) !important; }
    .nav-badge {
      font-family: 'DM Mono', monospace !important;
      font-size: 8px !important; font-weight: 700 !important;
      padding: 2px 7px !important; border-radius: 10px !important;
      background: rgba(0,194,199,0.12) !important; color: #00C2C7 !important;
      letter-spacing: 1px !important; margin-left: auto !important;
      flex-shrink: 0 !important;
    }
    .nav-mega-footer {
      max-width: 1100px; margin: 28px auto 0;
      padding-top: 20px; border-top: 1px solid rgba(0,62,107,0.06);
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 12px;
    }
    .nav-mega-footer-text {
      font-family: 'DM Mono', monospace !important;
      font-size: 10px !important; color: #bbb !important; letter-spacing: 1px !important;
    }
    .nav-mega-footer-cta {
      font-family: 'DM Sans', sans-serif !important;
      font-size: 13px !important; font-weight: 700 !important;
      padding: 9px 20px !important;
      background: linear-gradient(135deg,#0f3d6b,#0f6fa6) !important;
      color: #fff !important; text-decoration: none !important;
      border-radius: 6px !important; transition: opacity .2s !important;
    }
    .nav-mega-footer-cta:hover { opacity: .9 !important; }

    /* Mobile: hide desktop links, show burger */
    @media (max-width: 1100px) {
      nav .nav-links { display: none !important; }
      .nav-burger { display: flex !important; }
      .nav-mega-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 600px) {
      .nav-mega-grid { grid-template-columns: 1fr; gap: 24px; }
      .nav-mega { padding: 24px 5% 32px; }
    }

    /* ── FOOTER PREMIUM ── */
    footer {
      background: linear-gradient(135deg,#0b1e30 0%,#0f3d6b 60%,#0f6fa6 100%) !important;
      padding: 64px 6% 0 !important;
      position: relative !important; overflow: hidden !important;
    }
    footer::before {
      content: '' !important; position: absolute !important; inset: 0 !important;
      background-image:
        repeating-linear-gradient(0deg,transparent,transparent 47px,rgba(255,255,255,.02) 48px),
        repeating-linear-gradient(90deg,transparent,transparent 47px,rgba(255,255,255,.015) 48px) !important;
      pointer-events: none !important;
    }
    footer::after {
      content: '' !important; position: absolute !important;
      top: -100px !important; right: -60px !important;
      width: 400px !important; height: 400px !important;
      background: radial-gradient(ellipse,rgba(0,194,199,.12) 0%,transparent 65%) !important;
      pointer-events: none !important;
    }
    .footer-inner { position: relative; z-index: 1; }
    .footer-top {
      display: flex; align-items: flex-start; justify-content: space-between;
      gap: 40px; margin-bottom: 48px; flex-wrap: wrap;
    }
    .footer-brand {}
    .footer-logo {
      font-family: 'DM Mono', monospace !important;
      font-size: 18px !important; font-weight: 500 !important;
      color: #fff !important; letter-spacing: 4px !important;
      text-decoration: none !important; display: block !important;
      margin-bottom: 14px !important;
    }
    .footer-tagline {
      font-family: 'DM Sans', sans-serif !important;
      font-size: 13px !important; color: rgba(255,255,255,0.45) !important;
      line-height: 1.8 !important; max-width: 280px !important;
    }
    .footer-cms-badge {
      font-family: 'DM Mono', monospace !important;
      font-size: 9px !important; letter-spacing: 2px !important;
      color: rgba(255,255,255,0.3) !important; margin-top: 16px !important;
      padding: 5px 12px !important; border: 1px solid rgba(255,255,255,0.1) !important;
      border-radius: 20px !important; display: inline-block !important;
    }
    .footer-cols {
      display: grid !important; grid-template-columns: repeat(3,1fr) !important;
      gap: 40px !important; margin-bottom: 48px !important;
    }
    .footer-col-title {
      font-family: 'DM Mono', monospace !important;
      font-size: 9px !important; font-weight: 700 !important;
      color: #00C2C7 !important; letter-spacing: 3px !important;
      margin-bottom: 18px !important; text-transform: uppercase !important;
    }
    .footer-cols ul { list-style: none; padding: 0; margin: 0; }
    .footer-cols li { margin-bottom: 4px; }
    .footer-cols a {
      font-family: 'DM Sans', sans-serif !important;
      font-size: 13px !important; color: rgba(255,255,255,0.55) !important;
      text-decoration: none !important; transition: color .2s !important;
      display: block !important; padding: 4px 0 !important;
    }
    .footer-cols a:hover { color: #fff !important; }
    .footer-cols a.footer-highlight {
      color: rgba(0,194,199,0.8) !important; font-weight: 600 !important;
    }
    .footer-cols a.footer-highlight:hover { color: #00C2C7 !important; }
    .footer-bottom {
      position: relative; z-index: 1;
      padding: 20px 0 28px;
      border-top: 1px solid rgba(255,255,255,0.08) !important;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 12px;
    }
    .footer-credit {
      font-family: 'DM Mono', monospace !important;
      font-size: 10px !important; color: rgba(255,255,255,0.3) !important;
      letter-spacing: .5px !important;
    }
    .footer-credit strong { color: rgba(255,255,255,0.5) !important; }
    .footer-links-bottom { display: flex; gap: 20px; }
    .footer-links-bottom a {
      font-family: 'DM Mono', monospace !important;
      font-size: 10px !important; color: rgba(255,255,255,0.25) !important;
      text-decoration: none !important; letter-spacing: .5px !important;
      transition: color .2s !important;
    }
    .footer-links-bottom a:hover { color: rgba(255,255,255,0.6) !important; }
    @media (max-width: 900px) {
      .footer-cols { grid-template-columns: 1fr 1fr !important; }
      .footer-top { flex-direction: column; gap: 24px; }
    }
    @media (max-width: 600px) {
      .footer-cols { grid-template-columns: 1fr !important; }
    }
  `;

  function buildNav() {
    const indexPage = lang === 'fr' ? 'index.html' : 'index-' + lang + '.html';
    const frag = document.createDocumentFragment();

    // NAV BAR
    const nav = document.createElement('nav');

    const logo = document.createElement('a');
    logo.href = indexPage;
    logo.className = 'cms-logo';
    logo.textContent = 'CMS';
    nav.appendChild(logo);

    // Desktop links
    const ul = document.createElement('ul');
    ul.className = 'nav-links';
    NAV_MAIN[lang].forEach(function(item) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      if (item.href.split('#')[0] === page) a.classList.add('active');
      if (item.cta) a.classList.add('nav-cta');
      li.appendChild(a);
      ul.appendChild(li);
    });
    nav.appendChild(ul);

    // Lang switcher
    const switcher = document.createElement('div');
    switcher.className = 'cms-lang-switcher';
    ['fr','en','es'].forEach(function(l) {
      const a = document.createElement('a');
      a.href = pageFor(l);
      a.textContent = l.toUpperCase();
      if (l === lang) a.classList.add('lang-active');
      switcher.appendChild(a);
    });
    nav.appendChild(switcher);

    // Hamburger button
    const burger = document.createElement('button');
    burger.className = 'nav-burger';
    burger.setAttribute('aria-label', 'Menu');
    burger.innerHTML = '<span></span><span></span><span></span>';
    nav.appendChild(burger);

    frag.appendChild(nav);

    // MEGA MENU PANEL
    const mega = document.createElement('div');
    mega.className = 'nav-mega';

    const grid = document.createElement('div');
    grid.className = 'nav-mega-grid';

    NAV_GROUPS[lang].forEach(function(group) {
      const section = document.createElement('div');
      section.className = 'nav-mega-section';

      const title = document.createElement('div');
      title.className = 'nav-mega-title';
      title.textContent = group.title;
      section.appendChild(title);

      const links = document.createElement('ul');
      links.className = 'nav-mega-links';
      group.links.forEach(function(item) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        if (item.href === page) a.classList.add('active');
        if (item.badge) {
          const badge = document.createElement('span');
          badge.className = 'nav-badge';
          badge.textContent = item.badge;
          a.appendChild(badge);
        }
        li.appendChild(a);
        links.appendChild(li);
      });
      section.appendChild(links);
      grid.appendChild(section);
    });
    mega.appendChild(grid);

    // Mega footer bar
    const megaFooter = document.createElement('div');
    megaFooter.className = 'nav-mega-footer';
    const megaText = document.createElement('span');
    megaText.className = 'nav-mega-footer-text';
    megaText.textContent = 'CARIBBEAN METADATA STANDARD v2.0 · CARIBWOOD LANGUAGE LAB';
    const megaCta = document.createElement('a');
    megaCta.className = 'nav-mega-footer-cta';
    megaCta.href = 'submit.html';
    megaCta.textContent = lang === 'fr' ? 'Certifier mon œuvre →' : lang === 'en' ? 'Certify my work →' : 'Certificar mi obra →';
    megaFooter.appendChild(megaText);
    megaFooter.appendChild(megaCta);
    mega.appendChild(megaFooter);

    frag.appendChild(mega);

    // Toggle logic
    burger.addEventListener('click', function(e) {
      e.stopPropagation();
      burger.classList.toggle('open');
      mega.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !mega.contains(e.target)) {
        burger.classList.remove('open');
        mega.classList.remove('open');
      }
    });
    mega.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        burger.classList.remove('open');
        mega.classList.remove('open');
      });
    });

    return frag;
  }

  function buildFooter() {
    const f = FOOTER[lang];
    const indexPage = lang === 'fr' ? 'index.html' : 'index-' + lang + '.html';
    const footer = document.createElement('footer');

    const inner = document.createElement('div');
    inner.className = 'footer-inner';

    // Top row — brand + cols
    const top = document.createElement('div');
    top.className = 'footer-top';

    // Brand
    const brand = document.createElement('div');
    brand.className = 'footer-brand';
    const logo = document.createElement('a');
    logo.href = indexPage;
    logo.className = 'footer-logo';
    logo.textContent = 'CMS';
    const tagline = document.createElement('p');
    tagline.className = 'footer-tagline';
    tagline.textContent = f.tagline;
    const badge = document.createElement('span');
    badge.className = 'footer-cms-badge';
    badge.textContent = 'CMS v2.0 · CC-BY 4.0';
    brand.appendChild(logo);
    brand.appendChild(tagline);
    brand.appendChild(badge);
    top.appendChild(brand);
    inner.appendChild(top);

    // Columns
    const colsDiv = document.createElement('div');
    colsDiv.className = 'footer-cols';
    f.cols.forEach(function(col) {
      const div = document.createElement('div');
      const title = document.createElement('p');
      title.className = 'footer-col-title';
      title.textContent = col.title;
      div.appendChild(title);
      const ul = document.createElement('ul');
      col.links.forEach(function(link) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.label;
        if (link.href === 'certification.html' || link.href === 'submit.html') {
          a.classList.add('footer-highlight');
        }
        li.appendChild(a);
        ul.appendChild(li);
      });
      div.appendChild(ul);
      colsDiv.appendChild(div);
    });
    inner.appendChild(colsDiv);

    // Bottom bar
    const bottom = document.createElement('div');
    bottom.className = 'footer-bottom';
    const credit = document.createElement('p');
    credit.className = 'footer-credit';
    credit.innerHTML = '<strong>caribbeanmetadata.org</strong> · Caribbean Metadata Standard v2.0 · Caribwood Language Lab — Guadeloupe';
    const bottomLinks = document.createElement('div');
    bottomLinks.className = 'footer-links-bottom';
    [
      { href: 'spec.html', label: 'Spécification' },
      { href: 'glossaire.html', label: 'Glossaire' },
      { href: 'contact.html', label: 'Contact' },
    ].forEach(function(item) {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      bottomLinks.appendChild(a);
    });
    bottom.appendChild(credit);
    bottom.appendChild(bottomLinks);
    inner.appendChild(bottom);

    footer.appendChild(inner);
    return footer;
  }

  function init() {
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    // Nav + mega menu
    const navFrag = buildNav();
    const existingNav = document.querySelector('nav');
    if (existingNav) {
      existingNav.parentNode.insertBefore(navFrag, existingNav.nextSibling);
      existingNav.parentNode.removeChild(existingNav);
    } else {
      document.body.insertBefore(navFrag, document.body.firstChild);
    }

    // Footer
    const existingFooter = document.querySelector('footer');
    const newFooter = buildFooter();
    if (existingFooter) existingFooter.parentNode.replaceChild(newFooter, existingFooter);
    else document.body.appendChild(newFooter);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
