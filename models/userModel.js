const db = require('../config/db');

// Benutzer mit Client-ID suchen
const findUserByClientId = (clientId, callback) => {
    const sql = 'SELECT * FROM users WHERE client_id = ?';
    db.query(sql, [clientId], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

// API-Key für Benutzer aktualisieren
const updateApiKey = (clientId, apiKey, callback) => {
    const sql = 'UPDATE users SET api_key = ? WHERE client_id = ?';
    db.query(sql, [apiKey, clientId], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

module.exports = {
    findUserByClientId,
    updateApiKey
};
