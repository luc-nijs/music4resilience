// Languages. English is the main language and lives at the plain addresses
// (/project); French and German get a prefix (/fr/project, /de/project).
// Each page keeps its own text for the three languages in the page file itself;
// the words used on every page (menu, footer, buttons) are below.

export const LANGS = ['en', 'fr', 'de'];
export const LANG_NAMES = { en: 'English', fr: 'Français', de: 'Deutsch' };

// For getStaticPaths in the pages under src/pages/[...lang]/: one copy per language.
export const langPaths = () =>
  LANGS.map((lang) => ({ params: { lang: lang === 'en' ? undefined : lang }, props: { lang } }));

// The address of a page in a language: href('fr', '/project') -> '/fr/project'.
// Addresses outside the site (https://…) are left as they are.
export const href = (lang, path) =>
  lang === 'en' || !path.startsWith('/') ? path : path === '/' ? `/${lang}` : `/${lang}${path}`;

// Picks this language's text out of { en, fr, de }.
export const pick = (lang, texts) => texts[lang] ?? texts.en;

export const ui = {
  en: {
    homeTitle: 'Music4Resilience | music & youth work',
    description: 'Music4Resilience: community-based music labs that train and equip youth workers in Luxembourg to support vulnerable young people through music. A University of Luxembourg project supported by the André Losch Fondation.',
    tagline: 'Building <em>Resilience</em> through <em>Music</em> in Youth Work',
    menu: 'Menu',
    language: 'Language',
    nav: { '/': 'Home', '/project': 'Project', '/resources': 'Resources', '/dissemination': 'Dissemination', '/team': 'Team', '/partners': 'Partners', '/contact': 'Contact' },
    copyright: 'Copyright © Université du Luxembourg 2026. All rights reserved',
    open: 'Open →',
    soon: 'Coming soon',
    contentSoon: 'Content coming soon.',
    pages: 'pages',
    seeHere: 'see here',
  },
  fr: {
    homeTitle: 'Music4Resilience | musique & travail de jeunesse',
    description: 'Music4Resilience : des laboratoires musicaux communautaires qui forment et outillent les professionnels de la jeunesse au Luxembourg pour accompagner les jeunes vulnérables par la musique. Un projet de l’Université du Luxembourg soutenu par l’André Losch Fondation.',
    tagline: 'Renforcer la <em>résilience</em> par la <em>musique</em> dans le travail de jeunesse',
    menu: 'Menu',
    language: 'Langue',
    nav: { '/': 'Accueil', '/project': 'Projet', '/resources': 'Ressources', '/dissemination': 'Diffusion', '/team': 'Équipe', '/partners': 'Partenaires', '/contact': 'Contact' },
    copyright: 'Copyright © Université du Luxembourg 2026. Tous droits réservés',
    open: 'Ouvrir →',
    soon: 'Bientôt disponible',
    contentSoon: 'Contenu bientôt disponible.',
    pages: 'pages',
    seeHere: 'voir ici',
  },
  de: {
    homeTitle: 'Music4Resilience | Musik & Jugendarbeit',
    description: 'Music4Resilience: gemeinschaftsbasierte Musiklabore, die Fachkräfte der Jugendarbeit in Luxemburg schulen und ausstatten, um vulnerable Jugendliche mit Musik zu unterstützen. Ein Projekt der Universität Luxemburg, gefördert von der André Losch Fondation.',
    tagline: '<em>Resilienz</em> stärken durch <em>Musik</em> in der Jugendarbeit',
    menu: 'Menü',
    language: 'Sprache',
    nav: { '/': 'Start', '/project': 'Projekt', '/resources': 'Ressourcen', '/dissemination': 'Verbreitung', '/team': 'Team', '/partners': 'Partner', '/contact': 'Kontakt' },
    copyright: 'Copyright © Université du Luxembourg 2026. Alle Rechte vorbehalten',
    open: 'Öffnen →',
    soon: 'Demnächst verfügbar',
    contentSoon: 'Inhalt demnächst verfügbar.',
    pages: 'Seiten',
    seeHere: 'mehr dazu',
  },
};
