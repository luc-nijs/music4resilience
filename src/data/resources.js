// The workshops and online-course modules. Each one gets its own page at
// /resources/<section>/<slug> (and /fr/…, /de/…). The slug stays the same in every language.
import { pick } from '../i18n.js';

const workshopTexts = [
  {
    slug: 'workshop-1', num: '1',
    en: { title: 'Workshop 1: Music and Movement', text: 'Emotion awareness, labelling and regulation.' },
    fr: { title: 'Atelier 1 : Musique et mouvement', text: 'Prise de conscience, identification et régulation des émotions.' },
    de: { title: 'Workshop 1: Musik und Bewegung', text: 'Emotionen wahrnehmen, benennen und regulieren.' },
  },
  {
    slug: 'workshop-2', num: '2',
    en: { title: 'Workshop 2: Musical Care', text: 'Communication and self-regulation.' },
    fr: { title: 'Atelier 2 : Le soin par la musique', text: 'Communication et autorégulation.' },
    de: { title: 'Workshop 2: Musikalische Fürsorge', text: 'Kommunikation und Selbstregulation.' },
  },
  {
    slug: 'workshop-3', num: '3',
    en: { title: 'Workshop 3: Inclusive Music Making', text: 'Planning and problem-solving.' },
    fr: { title: 'Atelier 3 : Faire de la musique de manière inclusive', text: 'Planification et résolution de problèmes.' },
    de: { title: 'Workshop 3: Inklusives Musizieren', text: 'Planen und Probleme lösen.' },
  },
  {
    slug: 'workshop-4', num: '4',
    en: { title: 'Workshop 4: Music, Technology and Disability', text: 'Creativity and collaboration with accessible music technologies.' },
    fr: { title: 'Atelier 4 : Musique, technologie et handicap', text: 'Créativité et collaboration grâce à des technologies musicales accessibles.' },
    de: { title: 'Workshop 4: Musik, Technologie und Behinderung', text: 'Kreativität und Zusammenarbeit mit barrierefreien Musiktechnologien.' },
  },
];

const moduleTexts = [
  { slug: 'sel', num: '1', en: { title: 'Social and Emotional Learning (SEL)' }, fr: { title: 'Apprentissage socio-émotionnel (ASE)' }, de: { title: 'Sozial-emotionales Lernen (SEL)' } },
  { slug: 'resilience', num: '2', en: { title: 'Resilience' }, fr: { title: 'Résilience' }, de: { title: 'Resilienz' } },
  { slug: 'embodiment', num: '3', en: { title: 'Embodiment' }, fr: { title: 'Incarnation et corporéité' }, de: { title: 'Verkörperung (Embodiment)' } },
  { slug: 'musical-care', num: '4', en: { title: 'Musical Care' }, fr: { title: 'Le soin par la musique' }, de: { title: 'Musikalische Fürsorge' } },
  { slug: 'digital-tools', num: '5', en: { title: 'Digital tools' }, fr: { title: 'Outils numériques' }, de: { title: 'Digitale Werkzeuge' } },
  { slug: 'practical-applications', num: '6', en: { title: 'Practical applications' }, fr: { title: 'Applications pratiques' }, de: { title: 'Praktische Anwendungen' } },
];

const inLang = (list, lang) => list.map(({ slug, num, ...texts }) => ({ slug, num, ...pick(lang, texts) }));
export const workshops = (lang = 'en') => inLang(workshopTexts, lang);
export const courseModules = (lang = 'en') => inLang(moduleTexts, lang);
