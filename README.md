# TulpaKing®
Zum Login: <br>
http://20.79.178.244:3000/index.html

Support-Mail:<br>
goldimental@gmx.de <br>
Discord-Server:<br>
https://discord.gg/qNqz3AUuN7

# Last Update ⬇️ 15.09.2025

🔴Neue Design´s in versch. Farben verfügbar<br>
⚪Neue Einstellmöglichkeiten (Vollbild, Zoom)<br>
🟡Steuerung mit dem Controller<br>
🟢Auf dem Smartphone spielbar dank responsivem Webdesign<br>
🔵Discord Community Server inkl. Support-Ticket-System<br>
🟣Automatic Support für Passwort vergessen<br>
🟡Neue Spielinhalte und Erweiterungen<br>
⚪Balancing von Spielinhalten<br>
🔴Datenschutzkonformität (AGB, Datenschutzerklärung)<br>

### Entwicklung
Zur Struktur gehört ein selbst geschriebener server.js (NodeJS) mit NPM-Abhängigkeiten (Express, nodemailer, mongoose, dotenv, path, etc.) breitgestellt auf einer Azure VM mit PM2 Konfiguration.<br>
Der Server verfügt über einen Wartungsmodus, der es den Entwicklern ermöglicht, den Server offline zu schalten. Im Wartungsmodus haben nur berechtigte Entwickler Zugang zur Anmeldung und zum Spiel. Alle anderen erhalten dementsprechend eine Offline-Meldung, beim Versuch auf die Anmeldeseite zu gelangen.<br>
Die Datenbank wird über MongoDB Atlas bereitgestellt und konfiguriert.<br>

Alle anderen notwendigen Funktionen zum Betreiben des Spiels wurden ausschließlich von den teilnehmenden Entwicklern entwickelt. Dazu wurden themenspezifische Skripte (JavaScript) angelegt, um die Übersicht für die Entwickler zu vereinfachen. Jeder Spielabschnitt erhält so ein separates Script, wodurch bei Scriptfehlern nur einzelne Spielabschnitte nicht funktionieren und nicht gleich das gesamte Spiel.<br>

Für Grafik wurden diverse Programme, wie Aseprite oder GIMP, verwendet, um eigene Grafiken zu erstellen bzw. anzupassen.
Die meisten Bilddateien werden über die CSS-Eigenschaft background-image in die HTML transportiert und mittels JavaScript manipuliert. Nur selten über das img Element aus einer HTML heraus. Dies erzeugt eine bessere Übersicht im HTML-Code (Durch das Fehlen der langen Links 🤫) und erleichtert das Programmieren von Javascript-Funktionen.

Zum Testen haben wir keine separaten Scripte geschrieben. Wir haben es einfach gespielt, bis es nicht mehr geht. 😅<br>
Dazu nutzen wir die Entwicklerkonsole des Browsers. An bestimmten Stellen im Code kann man sich ein Feedback von der Funktion in die Konsole liefern lassen. Eine Art Log, der anzeigt, was JavaScript so im Hintergrund macht 😉.<br>

Und So entwickelte es sich immer weiter und wurde größer.<br>
Und wenn die Entwickler nicht gestorben sind, dann entwickeln Sie noch heute. 🤣<br>

### Struktur
Zu TulpaKing® gehört<br>
- eine Landing-Page (Login- & Registrierungs-Seite)<br>
- AGB & Datenschutzerklärung<br>
- eine Game-Page (Die Spielseite)<br>
- eine Info-Page (Die Infoseite)<br>
- ein Impressum<br>
- eine Passwort-Vergessen-Seite<br>
- eine Passwort-Zurücksetzen-Seite<br>
- eine 404-Page (Fehlerseite)<br>
- eine 503-Page (Offline-Status-Seite)<br>