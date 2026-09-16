/**
 * Die Fortschrittsfarbe der App – Rot über Orange und Gelb nach Grün,
 * logistisch um 58 % zentriert (`Palette.fortschritt` in `Theme.swift`).
 * Begonnene Sets liegen fast alle zwischen 45 und 80 %; dort macht die
 * Skala ihre Unterschiede.
 */
export function fortschrittFarbe(anteil: number): string {
  const f = Math.max(0, Math.min(1, anteil));
  const roh = 1 / (1 + Math.exp(-11 * (f - 0.58)));
  const unten = 1 / (1 + Math.exp(-11 * (0 - 0.58)));
  const oben = 1 / (1 + Math.exp(-11 * (1 - 0.58)));
  const p = (roh - unten) / (oben - unten);
  // Farbton 0 ist Rot, 0,38 das Zielgrün (HSB der App → HSL fürs Web).
  const hue = 0.38 * p * 360;
  const s = 0.65 + 0.05 * p;
  const b = 0.72 + 0.21 * p;
  // HSB → HSL
  const l = b * (1 - s / 2);
  const sl = l === 0 || l === 1 ? 0 : (b - l) / Math.min(l, 1 - l);
  return `hsl(${hue.toFixed(1)} ${(sl * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%)`;
}

/** Die sieben Zustandsstufen mit ihren Farben (`CardCondition` in der App). */
export const ZUSTAENDE = [
  { kurz: 'MT', name: 'Mint', faktor: 1.0, tint: 'rgb(41 153 166)', hell: 'rgb(107 219 230)', detail: 'Makellos, ohne erkennbare Mängel' },
  { kurz: 'NM', name: 'Near Mint', faktor: 1.0, tint: 'rgb(41 153 82)', hell: 'rgb(102 224 140)', detail: 'Wie ungespielt, allenfalls minimale Spuren' },
  { kurz: 'EX', name: 'Excellent', faktor: 0.9, tint: 'rgb(107 148 41)', hell: 'rgb(184 227 107)', detail: 'Leichte Spuren, nur aus der Nähe sichtbar' },
  { kurz: 'GD', name: 'Good', faktor: 0.8, tint: 'rgb(184 148 26)', hell: 'rgb(250 214 92)', detail: 'Deutliche Spuren an Kanten oder Ecken' },
  { kurz: 'LP', name: 'Light Played', faktor: 0.7, tint: 'rgb(209 115 31)', hell: 'rgb(255 173 92)', detail: 'Sichtbar gespielt, in Hülle noch turniertauglich' },
  { kurz: 'PL', name: 'Played', faktor: 0.55, tint: 'rgb(189 61 61)', hell: 'rgb(255 135 130)', detail: 'Starke Abnutzung, Knicke oder Kratzer möglich' },
  { kurz: 'PO', name: 'Poor', faktor: 0.35, tint: 'rgb(179 41 46)', hell: 'rgb(255 112 115)', detail: 'Schwer beschädigt, nur noch Lückenfüller' },
] as const;

/** Euro wie die App: Komma, Tausenderpunkt, geschütztes Leerzeichen. */
export function euro(wert: number): string {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(wert);
}
