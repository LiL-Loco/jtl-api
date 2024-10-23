JTL Wawi API
Dies ist eine einfache API, die grundlegende Funktionen für die Verwaltung von App-Registrierungen für die JTL Wawi nachbildet. Die API basiert auf Node.js, Express und MySQL und bietet Endpunkte für CRUD-Operationen (Create, Read, Update, Delete).

Voraussetzungen
Node.js v14 oder höher
MySQL-Datenbank
Postman oder ein anderes Tool zur API-Testung (optional)
Installation
1. Klonen Sie das Repository
bash
Code kopieren
git clone <repository-url>
cd jtl-wawi-api
2. Installieren Sie die Abhängigkeiten
Führen Sie den folgenden Befehl aus, um alle notwendigen Node.js-Pakete zu installieren:

bash
Code kopieren
npm install
3. MySQL-Datenbank einrichten
Erstellen Sie eine MySQL-Datenbank und eine Tabelle zur Speicherung der App-Registrierungen:

sql
Code kopieren
CREATE DATABASE jtl_wawi;

USE jtl_wawi;

CREATE TABLE app_registration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    app_name VARCHAR(255) NOT NULL,
    app_version VARCHAR(255),
    app_key VARCHAR(255)
);
4. Datenbankkonfiguration
Bearbeiten Sie die Datei config/db.js und passen Sie die MySQL-Datenbankverbindungsdaten an:

javascript
Code kopieren
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'jtl_wawi'
});
5. Starten des Servers
Starten Sie den API-Server:

bash
Code kopieren
npm start
Der Server läuft standardmäßig auf Port 3000. Sie können nun die API unter http://localhost:3000 aufrufen.

API-Endpunkte
1. GET /appRegistrations
Beschreibung: Gibt eine Liste aller registrierten Apps zurück.

Methode: GET
URL: /appRegistrations
Antwort: Array von App-Objekten
Beispiel:

json
Code kopieren
[
  {
    "id": 1,
    "app_name": "TestApp",
    "app_version": "1.0",
    "app_key": "12345"
  }
]
2. POST /appRegistrations
Beschreibung: Erstellt eine neue App-Registrierung.

Methode: POST

URL: /appRegistrations

Body (JSON):

json
Code kopieren
{
  "appName": "NewApp",
  "appVersion": "1.0",
  "appKey": "newkey123"
}
Antwort (JSON):

json
Code kopieren
{
  "status": "Success",
  "id": 2
}
3. GET /appRegistrations/:id
Beschreibung: Gibt die Details einer bestimmten App-Registrierung zurück.

Methode: GET

URL: /appRegistrations/:id

Parameter:

id (Pfadparameter): ID der App-Registrierung
Antwort:

json
Code kopieren
{
  "id": 1,
  "app_name": "TestApp",
  "app_version": "1.0",
  "app_key": "12345"
}
4. PUT /appRegistrations/:id
Beschreibung: Aktualisiert die Informationen einer bestimmten App-Registrierung.

Methode: PUT

URL: /appRegistrations/:id

Body (JSON):

json
Code kopieren
{
  "appName": "UpdatedApp",
  "appVersion": "1.1",
  "appKey": "updatedkey123"
}
Antwort:

json
Code kopieren
{
  "status": "Success",
  "message": "App with id 1 updated"
}
5. DELETE /appRegistrations/:id
Beschreibung: Löscht eine bestimmte App-Registrierung.

Methode: DELETE

URL: /appRegistrations/:id

Antwort:

json
Code kopieren
{
  "status": "Success",
  "message": "App with id 1 deleted"
}
Sicherheit (optional)
Sie können eine Authentifizierung auf Basis von JWT (JSON Web Token) hinzufügen. Dazu können Sie die Middleware in middleware/authMiddleware.js verwenden.

Beispiel für die Authentifizierung
Generieren Sie ein JWT:

javascript
Code kopieren
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 1 }, 'yourSecretKey', { expiresIn: '1h' });
console.log(token);
Fügen Sie den Token in den Autorisierungsheader Ihrer Anfragen ein:

bash
Code kopieren
Authorization: Bearer <Ihr Token>
Schützen Sie Endpunkte durch die Authentifizierungs-Middleware:

javascript
Code kopieren
const authenticateToken = require('./middleware/authMiddleware');

app.get('/appRegistrations', authenticateToken, (req, res) => {
    // Geschützter Endpunkt
});
Lizenz
Dieses Projekt steht unter der MIT-Lizenz.

yaml
Code kopieren

---

Dieser Text ist korrekt formatiert und kann direkt in Ihre `README.md`-Datei eingefügt werden.