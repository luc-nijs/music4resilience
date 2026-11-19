# Music4Resilience website

Astro site, set up like the other sites in `Dropbox/Nijs_WebsiteMigration` (see `TUTORIAL.md` there).

- Pages: `src/pages/[...lang]/` · layout (header, menu, footer): `src/layouts/Base.astro` · menu: `src/data/nav.js`
- Languages: English at the plain addresses (`/project`), French at `/fr/…`, German at `/de/…`; the EN · FR · DE switch in the header goes to the same page in the other language. Each page file holds its own text in the three languages (`en: {…}, fr: {…}, de: {…}` at the top); words shared by all pages (menu, footer, buttons) are in `src/i18n.js`; workshop and course titles in `src/data/resources.js`. News: optional sheet columns `Text FR` and `Text DE` (empty = English text).
- Styles: `src/styles/site.css` (layout from project-samuse.lu, colours from uni.lu)
- News: Google Sheet `MUSIC4RES_news` (Text, Link, Picture, Until, Publish), link in `src/lib/news.js`.
  Until the sheet is published, `src/data/MUSIC4RES_news.csv` is used. The last row shows first.
- Preview: `npm run dev -- --port 4332` · build: `npm run build`
- Publishing: `.github/workflows/deploy.yml` (GitHub Pages, after every push and nightly).
- `_source/` stays local (not on GitHub).
