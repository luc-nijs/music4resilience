# Music4Resilience website

Astro site, set up like the other sites in `Dropbox/Nijs_WebsiteMigration` (see `TUTORIAL.md` there).

- Pages: `src/pages/` · layout (header, menu, footer): `src/layouts/Base.astro` · menu: `src/data/nav.js`
- Styles: `src/styles/site.css` (layout from project-samuse.lu, colours from uni.lu)
- News: Google Sheet `MUSIC4RES_news` (Text, Link, Picture, Until, Publish), link in `src/lib/news.js`.
  Until the sheet is published, `src/data/MUSIC4RES_news.csv` is used. The last row shows first.
- Preview: `npm run dev -- --port 4332` · build: `npm run build`
- Publishing: `.github/workflows/deploy.yml` (GitHub Pages, after every push and nightly).
- `_source/` stays local (not on GitHub).
