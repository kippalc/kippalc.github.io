# KippScan – Website

Die offizielle Seite der iPhone-App KippScan: Support-Adresse für den App-Store-Eintrag,
Datenschutzerklärung, Impressum – und eine Produktseite, die zeigt, was die App kann. Sie erklärt
nicht, wie die Erkennung arbeitet, sondern was dabei herauskommt: Karte scannen, Preis sehen,
Sammlung führen.

Gebaut mit [Astro](https://astro.build) als rein statische Seite: kein Server, keine
Datenbank, keine externen Schriften, keine Analyse-Skripte. Alles, was die
Datenschutzerklärung über diese Seiten sagt, bleibt damit wahr.

## Entwickeln

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # erzeugt dist/
npm run preview    # dist/ lokal ansehen
npm run check      # Typen und Astro-Diagnosen
```

## Aufbau

```
src/
├── data/site.ts          Adresse, Anbieterangaben, Zahlen, Navigation – **hier steht der App-Store-Link**
├── data/faq.ts           Die FAQ-Einträge
├── data/farben.ts        Fortschrittsfarbe und Zustandsstufen der App, fürs Web portiert
├── layouts/Base.astro    <head>, Navigation, Fußzeile, strukturierte Daten
├── layouts/Legal.astro   Rahmen für Impressum und Datenschutz
├── pages/                index, impressum, datenschutz, 404, intern/og (Vorlage fürs Social-Bild)
├── components/           Bausteine: Telefonrahmen, Scanner-Demo (Einzeln/Serie, Karte wählbar), Holo-Karte,
│                         Zustandsleiter, Set-Ansicht mit Filter (SetDetailDemo), Widget in allen Größen
│                         (WidgetDemo), Ringe, Kurve …
├── components/sections/  Die Abschnitte der Startseite in Lesereihenfolge (Hero → Zahlen → Scannen → Sammlung →
│                         Sets → Preise → Für wen → Und außerdem → Screens → Daten → FAQ → Download)
├── scripts/              reveal.ts (Einblenden beim Scrollen), licht.ts (Lichtpunkt unter der Maus auf Glasflächen)
├── styles/global.css     Formsprache der App (Theme.swift), als CSS
└── assets/               App-Symbol und Screenshots (werden beim Bauen in AVIF/WebP umgerechnet)
```

Alles Interaktive ist reine Zugabe: Ohne JavaScript steht jede Demo in ihrem Endzustand, jede Kachel
ist lesbar, nichts fehlt. Mit JavaScript lassen sich Karte und Modus der Scanner-Demo wählen, die
Zustandsleiter bedienen, die Set-Ansicht filtern, die Kurve abtasten, das Widget umschalten, „Preise ausblenden“ umlegen (die Kacheln des Abschnitts ziehen mit, wie in der App) und
jeder Screenshot groß öffnen. Alles davon geht auch mit Tastatur; `prefers-reduced-motion` schaltet
Bewegung ab.

Die Screenshots in `src/assets/screens/` sind 1320 × 2868 (iPhone 6,9″): vier aus `Store/screenshots/`
des App-Projekts, die übrigen aus derselben Fassung im Simulator (Statusleiste per `simctl status_bar`
auf 12:25 gesetzt, Alphakanal entfernt). **Keine Kartenkunst:** In Sammlung, Wertverlauf und Wunschliste
stehen an Stelle der Kartenvorschauen die Platzhalter, die die App ohne geladene Kartenbilder selbst
zeigt (Pixel aus einem Build mit `Kartenbildquelle.zeigtDatenbankbilder = false`). Die Kartenkunst gehört
The Pokémon Company – auf dieser Seite kommt sie nirgends vor, auch nicht als Miniatur. Nachgebaute Oberflächen (Scanner, Ergebnisfeld, Zustandsleiter,
Serienleiste, Set-Ansicht, Widget, Verkaufsblatt, „Preise ausblenden“) folgen dem App-Code – bei
Änderungen an der App dort nachziehen. Die Zustandsleiter läuft wie `CardCondition.ascending` von
Poor bis Mint; „Preise ausblenden“ lässt wie `Preisanzeige` keine Platzhalter zurück.

## Wenn die App im App Store ist

In `src/data/site.ts` die Konstante `APP_STORE_URL` setzen:

```ts
export const APP_STORE_URL = 'https://apps.apple.com/de/app/kippscan/id…';
```

Alle Download-Knöpfe, der Link in der Fußzeile und die strukturierten Daten
(`SoftwareApplication`) ziehen von selbst nach. Solange der Wert leer ist, steht auf den
Knöpfen „Bald im App Store“ und sie verweisen nirgendwohin.

Dazu das offizielle Badge: In Apples [App Store Marketing Tools](https://tools.applemediaservices.com/app-store/)
das deutsche Badge „Laden im App Store“ als SVG holen und als `public/app-store-badge-de.svg`
ablegen – die Knöpfe zeigen es dann unverändert an. Ohne die Datei bleibt es bei Text. Das
Apple-Logo allein darf nicht verwendet werden (Apples Markenrichtlinien), deshalb steht auf den
Knöpfen kein Apfel.

## Veröffentlichen (GitHub Pages)

Die Seite liegt unter <https://kippscan.de/> (Repository `kippalc/kippalc.github.io`, GitHub Pages
mit eigener Domain; `kippalc.github.io` leitet dauerhaft dorthin um). Die DNS-Einträge liegen bei
united-domains: vier A- und vier AAAA-Einträge auf die GitHub-Pages-Adressen, `www` als CNAME auf
`kippalc.github.io`. Die App und der Store-Eintrag verlinken fest `https://kippscan.de/datenschutz.html`
und `/impressum.html` – deshalb baut Astro Dateien statt Ordner (`build.format: 'file'`), und diese
Adressen bleiben bestehen.

Entweder den Inhalt von `dist/` nach einem `npm run build` in das Pages-Repository kopieren,
oder den mitgelieferten Workflow benutzen (`.github/workflows/deploy.yml`): Er baut bei jedem
Push auf `main` und veröffentlicht `dist/` über GitHub Pages (in den Repository-Einstellungen
unter *Pages* die Quelle auf *GitHub Actions* stellen).

## Social-Preview-Bild

`public/og.png` (1200 × 630) entsteht aus der Vorlage `/intern/og`:

```bash
npm run dev
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 \
  --screenshot=public/og.png http://localhost:4321/intern/og
```

## Was zusammenpassen muss

- **Anschrift, Telefon, E-Mail, USt-ID** stehen in `src/data/site.ts` und müssen mit
  `Anbieterangaben.swift` in der App und den Trader-Angaben im Store übereinstimmen.
- **Zahlen** (Karten, Sets, Illustratoren, versiegelte Produkte) stammen aus den mitgelieferten
  Daten der App (Stand 15.09.2026) und stehen ebenfalls in `src/data/site.ts`.
- **Preise** in den Demos sind echte Werte aus der Cardmarket-Tagesliste vom 15.09.2026
  (Glurak-ex 151 Nr. 199, Dragoran 151 Nr. 149, Mew-ex 151 Nr. 205). Sie dürfen veralten –
  sie stehen als Beispiel da, mit Datum.
- Die **Datenschutzerklärung** ist inhaltlich unverändert aus dem App-Projekt übernommen
  (Stand 16. September 2026). Ändert sich etwas an der App, dort und hier gemeinsam anpassen und
  das Datum mitziehen.
