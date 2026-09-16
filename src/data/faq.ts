/**
 * Häufige Fragen – nur solche, deren Antwort sich aus App und Projekt
 * eindeutig ergibt (README, Store-Text, Über-Screen, Datenschutzerklärung).
 */
export interface Frage {
  frage: string;
  antwort: string;
}

export const FAQ: Frage[] = [
  {
    frage: 'Welche Karten erkennt KippScan?',
    antwort:
      'Pokémon-Sammelkarten mit aufgedruckter Sammlernummer – deutsche und englische Drucke. Ein Verzeichnis mit 22.390 deutschen Karten in 209 Sets liegt in der App selbst. Ältere Promos ohne Set-Angabe sind über die Nummer allein oft nicht eindeutig; dann fragt die App, statt zu raten. Ein Teil dieser alten Promos trägt in der Datenbank nur englische Namen.',
  },
  {
    frage: 'Wie funktioniert die Erkennung?',
    antwort:
      'Die Kamera liest Name, Sammlernummer und Set-Kürzel von der unteren Kante der Karte – mit Apples Texterkennung, vollständig auf dem iPhone. Der Name führt, das Kürzel benennt das Set, die Set-Größe grenzt ein. Passen mehrere Karten zur Lesung, zeigt die App die Kandidaten mit Bild, Set und Preis. Es wird kein Kamerabild übertragen.',
  },
  {
    frage: 'Woher stammen die Preise?',
    antwort:
      'Aus Cardmarkets öffentlicher Tagesliste, in Euro – Durchschnitte tatsächlicher Verkäufe, keine Angebote. Reverse-Holo-Karten bekommen ihren eigenen Preis. Zu jeder Karte führen Links zur Suche bei Cardmarket und eBay. Die Preise sind nicht nach Sprache getrennt; für deutsche Karten ist der Wert deshalb eine Näherung. Führt Cardmarket kein Produkt zu einer Karte, kannst du einen eigenen Wert eintragen.',
  },
  {
    frage: 'Wo werden meine Daten gespeichert?',
    antwort:
      'Auf deinem iPhone. Es gibt kein Konto, keinen Server und kein Tracking. Ins Netz geht die App nur, um Kartendaten, Preise und Kartenbilder zu holen. Die Sammlung sichert sich täglich von selbst nach „Dateien“ ▸ Auf meinem iPhone ▸ KippScan; ob diese Datei ins iCloud-Backup wandert, entscheiden deine Geräteeinstellungen.',
  },
  {
    frage: 'Kostet KippScan etwas?',
    antwort:
      'Nein. KippScan ist gratis, ohne Abo und ohne Werbebanner. Genau ein Knopf je Karte („Gegradet: PSA 10 bei eBay“) ist ein in der App gekennzeichneter Werbelink; für dich ändert sich am Preis dort nichts.',
  },
  {
    frage: 'Funktioniert die App ohne Internet?',
    antwort:
      'Ja. Die Kartenliste liegt in der App, und die Preise kommen aus der zuletzt geladenen Tagesliste – im WLAN holt die App sie vorsorglich. Fällt die Kartendatenbank aus, werden Karten weiter zugeordnet und Preise weiter geholt. Kartenbilder kannst du einmalig laden (rund 206 MB), sonst kommen sie einzeln aus dem Netz.',
  },
  {
    frage: 'Kann ich eine bestehende Sammlung übernehmen?',
    antwort:
      'Ja, über „Liste einlesen“: aus Notizen („2x Glurak 4/102 NM“), aus einer Tabelle mit Kopfzeile oder aus dem Export einer anderen Sammel-App. Zugeordnet wird wie beim Scan – nichts wird geraten, unklare Zeilen werden mit Grund benannt und erst auf Tipp aufgenommen.',
  },
  {
    frage: 'Was kann die Kamera nicht sehen?',
    antwort:
      'Zustand, Folienart, Stempel und Edition. Die App zeigt Normaldruck und Reverse Holo mit ihren Preisen nebeneinander, den Zustand wählst du auf einer Leiter aus sieben Cardmarket-Stufen – was die Wahl kostet, steht gleich dabei.',
  },
  {
    frage: 'Was ist mit gegradeten Karten und versiegelter Ware?',
    antwort:
      'Beides gehört in dieselbe Sammlung. Gegradete Karten (PSA, BGS, CGC, SGC, ACE, TAG) bekommen einen hochgerechneten Wert aus dem Cardmarket-Preis der losen Karte und einem gemessenen Aufschlag für Note und Jahrgang – ein Anhaltspunkt, kein Verkaufspreis. Die PSA-Zertifikatsnummer liest die App vom Etikett ab. Versiegelte Ware – Displays, Top-Trainer-Boxen, Booster, Tins und mehr, 4.314 Produkte – führt die App mit Tagespreis.',
  },
  {
    frage: 'Eine Karte wird nicht erkannt – was tun?',
    antwort:
      'Die Kartennummer muss im Rahmen liegen und scharf sein: bei neueren Karten unten links, bei älteren unten rechts. Sehr glänzende Karten lassen sich oft besser leicht schräg ablichten. Alternativ liest die App ein gespeichertes Foto aus, oder du suchst von Hand – die gelesene Nummer steht dann schon im Suchfeld. Bleibt es dabei, schreib mir: Unter „Über die App“ liegt ein Protokoll der letzten Scans, das du mitschicken kannst.',
  },
  {
    frage: 'Was ist der Unterschied zwischen Marktwert und Sofortverkauf?',
    antwort:
      'Der Marktwert ist Cardmarkets Trend – das, was Verkäufer aufrufen – mal Stückzahl und Zustandsfaktor. Der Sofortverkauf rechnet mit dem Tiefstpreis, ebenfalls mal Stückzahl und Zustand, abzüglich 5 % Gebühr: was du beim schnellen Verkauf ungefähr bekämst. Positionen ohne bekannten Preis fließen in keine der Summen ein und werden gezählt ausgewiesen.',
  },
  {
    frage: 'Was passiert mit meiner Sammlung, wenn ich das iPhone wechsle?',
    antwort:
      'Die Sammlung liegt im Speicher der App und – täglich neu – als Sicherung in „Dateien“ ▸ Auf meinem iPhone ▸ KippScan. Beides ist Teil des iCloud-Backups deines Geräts, wenn du es eingeschaltet hast. Zusätzlich kannst du die Sicherung teilen (AirDrop, Dateien) und auf dem neuen Gerät über „Sicherung einlesen …“ übernehmen. Einlesen ergänzt nur und löscht nie – auch zweimaliges Einlesen verdoppelt nichts.',
  },
  {
    frage: 'Welche Geräte werden unterstützt?',
    antwort:
      'iPhone, ab iOS 17. Die App selbst ist nur wenige Megabyte groß; die Kartenbilder (206 MB) lädst du einmalig und optional nach – die Sammlung zeigt jede Karte dann sofort, auch ohne Netz.',
  },
];
