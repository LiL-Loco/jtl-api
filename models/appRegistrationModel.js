const db = require('../config/db');

// Funktion zum Abrufen aller App-Registrierungen
const getAllAppRegistrations = (callback) => {
    const sql = 'SELECT * FROM app_registration';
    db.query(sql, (err, results) => {
        if (err) return callback(err);
        callback(null, results);
    });
};

// Funktion zum Erstellen einer neuen App-Registrierung
const createAppRegistration = (appName, appVersion, appKey, callback) => {
    const sql = 'INSERT INTO app_registration (app_name, app_version, app_key) VALUES (?, ?, ?)';
    db.query(sql, [appName, appVersion, appKey], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

// Funktion zum Abrufen einer einzelnen App-Registrierung
const getAppRegistrationById = (id, callback) => {
    const sql = 'SELECT * FROM app_registration WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

// Funktion zum Aktualisieren einer App-Registrierung
const updateAppRegistration = (id, appName, appVersion, appKey, callback) => {
    const sql = 'UPDATE app_registration SET app_name = ?, app_version = ?, app_key = ? WHERE id = ?';
    db.query(sql, [appName, appVersion, appKey, id], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

// Funktion zum Löschen einer App-Registrierung
const deleteAppRegistration = (id, callback) => {
    const sql = 'DELETE FROM app_registration WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return callback(err);
        callback(null, result);
    });
};

module.exports = {
    getAllAppRegistrations,
    createAppRegistration,
    getAppRegistrationById,
    updateAppRegistration,
    deleteAppRegistration
};
