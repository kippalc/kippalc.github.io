// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Die Seiten liegen auf GitHub Pages unter der eigenen Domain kippscan.de
// (kippalc.github.io leitet dorthin um). Die App verlinkt `datenschutz.html`
// und `impressum.html` fest – deshalb `format: 'file'`, damit diese Adressen
// genau so bestehen bleiben.
export default defineConfig({
  site: 'https://kippscan.de',
  trailingSlash: 'never',
  compressHTML: true,
  devToolbar: { enabled: false },
  build: {
    format: 'file',
    inlineStylesheets: 'always',
  },
  image: {
    // Ein Bild, mehrere Breiten und Formate – erzeugt beim Bauen, nicht zur
    // Laufzeit. Mehr braucht eine Seite mit sechs Screenshots nicht.
    responsiveStyles: false,
  },
  integrations: [
    sitemap({
      changefreq: 'monthly',
      lastmod: new Date(),
      // Die OG-Vorlage und die Fehlerseite gehören nicht in die Sitemap.
      filter: (page) => !page.includes('/intern/') && !page.includes('/404'),
      // Unterseiten heißen `…/impressum.html` – so wie die App sie verlinkt.
      serialize: (item) => {
        const url = new URL(item.url);
        if (url.pathname !== '/' && !url.pathname.endsWith('.html')) {
          item.url = `${url.origin}${url.pathname}.html`;
        }
        return item;
      },
    }),
  ],
});
