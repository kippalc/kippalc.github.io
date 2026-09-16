/**
 * Alles, was sich an der Website ändern kann, ohne dass sich das Design
 * ändert – an genau einer Stelle.
 */

/**
 * Adresse der App im App Store.
 *
 * Solange die App nicht veröffentlicht ist, bleibt der Wert leer: Der
 * Download-Knopf zeigt dann „Bald im App Store“ und verweist nirgendwohin.
 * Sobald der Eintrag existiert, hier die Adresse eintragen
 * (`https://apps.apple.com/de/app/kippscan/id…`) – alle Knöpfe, die
 * strukturierten Daten und die Meta-Angaben ziehen von selbst nach.
 */
export const APP_STORE_URL = '';

export const SITE = {
  name: 'KippScan',
  url: 'https://kippscan.de',
  /** Untertitel wie im Store-Eintrag – 30 Zeichen. */
  tagline: 'Karten per Nummer erkennen',
  description:
    'Pokémon-Karten mit dem iPhone scannen, sofort den Cardmarket-Preis in Euro sehen und die ganze Sammlung führen – ohne Konto, ohne Tracking, kostenlos.',
  /** Mindestversion laut Projekt (`IPHONEOS_DEPLOYMENT_TARGET`). */
  minIOS: '17',
  version: '1.0',
} as const;

/** Pflichtangaben – wortgleich mit `Anbieterangaben.swift` in der App. */
export const ANBIETER = {
  name: 'Thomas Kipp Alcantara',
  strasse: 'Neuer Traßweg 35',
  ort: '51427 Bergisch Gladbach',
  land: 'Deutschland',
  email: 'thomas@kipp-alcantara.de',
  telefon: '+49\u00a0172\u00a08610360',
  telefonLink: 'tel:+491728610360',
  umsatzsteuerId: 'DE293405370',
} as const;

/** Zahlen aus den mitgelieferten Daten der App (Stand 15.09.2026). */
export const ZAHLEN = {
  karten: 22390,
  sets: 209,
  zustandsstufen: 7,
  illustratoren: 386,
  versiegelteProdukte: 4314,
  gradingFirmen: 6,
} as const;

export const NAV = [
  { href: '#scannen', label: 'Scannen' },
  { href: '#sammlung', label: 'Sammlung' },
  { href: '#sets', label: 'Sets' },
  { href: '#preise', label: 'Preise' },
  { href: '#mehr', label: 'Mehr' },
  { href: '#screens', label: 'Screens' },
  { href: '#faq', label: 'FAQ' },
] as const;
