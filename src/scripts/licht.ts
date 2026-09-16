/**
 * Ein Lichtpunkt, der unter der Maus über Glasflächen wandert: Kante und
 * Fläche werden dort heller, wo der Zeiger ist. Nur mit feinem Zeiger –
 * auf dem Telefon gibt es keinen, und da bleibt alles ruhig.
 */
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.addEventListener(
    'pointermove',
    (e) => {
      const ziel = (e.target as Element | null)?.closest<HTMLElement>('.glass--hover');
      if (!ziel) return;
      const r = ziel.getBoundingClientRect();
      ziel.style.setProperty('--mx', `${(e.clientX - r.left).toFixed(0)}px`);
      ziel.style.setProperty('--my', `${(e.clientY - r.top).toFixed(0)}px`);
    },
    { passive: true },
  );
}
