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
      'Pokémon-Sammelkarten mit aufgedruckter Sammlernummer – deutsche und englische Drucke, 22.390 Karten aus 209 Sets. Ist eine Nummer nicht eindeutig, zeigt die App die Kandidaten mit Bild und Preis, statt zu raten.',
  },
  {
    frage: 'Woher stammen die Preise?',
    antwort:
      'Aus Cardmarkets öffentlicher Tagesliste, in Euro – Durchschnitte tatsächlicher Verkäufe, keine Angebote. Reverse-Holo-Karten haben ihren eigenen Preis. Die Preise sind nicht nach Sprache getrennt; für deutsche Karten ist der Wert deshalb eine Näherung. Hat Cardmarket kein Produkt zu einer Karte, trägst du einen eigenen Wert ein.',
  },
  {
    frage: 'Kostet KippScan etwas?',
    antwort:
      'Nein. KippScan ist gratis, ohne Abo und ohne Werbebanner. Genau ein Knopf je Karte („Gegradet: PSA 10 bei eBay“) ist ein in der App gekennzeichneter Werbelink; für dich ändert sich am Preis dort nichts.',
  },
  {
    frage: 'Wo werden meine Daten gespeichert?',
    antwort:
      'Auf deinem iPhone. Es gibt kein Konto, keinen Server und kein Tracking. Die Sammlung sichert sich täglich von selbst nach „Dateien“ ▸ Auf meinem iPhone ▸ KippScan – und wandert mit dem iCloud-Backup deines Geräts mit, wenn du es eingeschaltet hast.',
  },
  {
    frage: 'Funktioniert die App ohne Internet?',
    antwort:
      'Ja. Die Kartenliste liegt in der App, die Preise kommen aus der zuletzt geladenen Tagesliste. Kartenbilder kannst du einmalig laden (rund 206 MB), sonst kommen sie einzeln aus dem Netz.',
  },
  {
    frage: 'Kann ich eine bestehende Sammlung übernehmen?',
    antwort:
      'Ja, über „Liste einlesen“: aus Notizen („2x Glurak 4/102 NM“), aus einer Tabelle oder aus dem Export einer anderen Sammel-App. Nichts wird geraten – unklare Zeilen werden benannt und erst auf Tipp aufgenommen.',
  },
  {
    frage: 'Eine Karte wird nicht erkannt – was tun?',
    antwort:
      'Die Kartennummer muss im Rahmen liegen und scharf sein. Sehr glänzende Karten lassen sich oft besser leicht schräg ablichten. Alternativ liest die App ein gespeichertes Foto aus, oder du suchst von Hand – die gelesene Nummer steht dann schon im Suchfeld. Bleibt es dabei, schreib mir.',
  },
  {
    frage: 'Was passiert mit meiner Sammlung, wenn ich das iPhone wechsle?',
    antwort:
      'Sie zieht mit dem iCloud-Backup um. Zusätzlich kannst du die tägliche Sicherung teilen (AirDrop, Dateien) und auf dem neuen Gerät über „Sicherung einlesen …“ übernehmen. Einlesen ergänzt nur und löscht nie.',
  },
  {
    frage: 'Welche Geräte werden unterstützt?',
    antwort:
      'iPhone, ab iOS 17. Die App selbst ist nur wenige Megabyte groß; die Kartenbilder lädst du einmalig und optional nach.',
  },
];
