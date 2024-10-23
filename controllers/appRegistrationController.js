const appRegistrationModel = require('../models/appRegistrationModel');

// Abrufen aller App-Registrierungen
const getAllAppRegistrations = (req, res) => {
    appRegistrationModel.getAllAppRegistrations((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
};

// Erstellen einer neuen App-Registrierung
const createAppRegistration = (req, res) => {
    const { appName, appVersion, appKey } = req.body;
    appRegistrationModel.createAppRegistration(appName, appVersion, appKey, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ status: 'Success', id: result.insertId });
    });
};

// Abrufen einer einzelnen App-Registrierung
const getAppRegistrationById = (req, res) => {
    const { id } = req.params;
    appRegistrationModel.getAppRegistrationById(id, (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length > 0) {
            res.json(result[0]);
        } else {
            res.status(404).send({ error: 'App not found' });
        }
    });
};

// Aktualisieren einer App-Registrierung
const updateAppRegistration = (req, res) => {
    const { id } = req.params;
    const { appName, appVersion, appKey } = req.body;
    appRegistrationModel.updateAppRegistration(id, appName, appVersion, appKey, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ status: 'Success', message: `App with id ${id} updated` });
    });
};

// Löschen einer App-Registrierung
const deleteAppRegistration = (req, res) => {
    const { id } = req.params;
    appRegistrationModel.deleteAppRegistration(id, (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ status: 'Success', message: `App with id ${id} deleted` });
    });
};

module.exports = {
    getAllAppRegistrations,
    createAppRegistration,
    getAppRegistrationById,
    updateAppRegistration,
    deleteAppRegistration
};
