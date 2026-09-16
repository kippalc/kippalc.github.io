/**
 * Einblenden beim Scrollen – und alles, was erst sichtbar starten soll
 * (Ringe, Kurven). Ein Beobachter für die ganze Seite.
 *
 * Ohne Skript oder mit reduzierter Bewegung ist alles sofort sichtbar
 * (siehe `html.js` in `global.css`).
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const targets = new Set(document.querySelectorAll<HTMLElement>('.reveal, [data-animate]'));

const zeige = (el: HTMLElement) => {
  el.classList.add('is-in');
  targets.delete(el);
};

if (reduced || !('IntersectionObserver' in window)) {
  targets.forEach(zeige);
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        zeige(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  );
  targets.forEach((el) => io.observe(el));

  // Wer springt statt scrollt (Ende-Taste, Sprungmarke), lässt Abschnitte
  // hinter sich, die der Beobachter nie im Bild hatte. Die werden hier
  // nachgezogen – nur die noch offenen, nur einmal je Bild.
  let angefragt = false;
  const nachziehen = () => {
    angefragt = false;
    for (const el of targets) {
      if (el.getBoundingClientRect().bottom < 0) {
        zeige(el);
        io.unobserve(el);
      }
    }
  };
  window.addEventListener(
    'scroll',
    () => {
      if (angefragt || targets.size === 0) return;
      angefragt = true;
      requestAnimationFrame(nachziehen);
    },
    { passive: true },
  );
}
