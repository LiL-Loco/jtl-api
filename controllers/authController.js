const crypto = require('crypto');
const userModel = require('../models/userModel');

// API-Key erstellen
const generateApiKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

// API-Key basierend auf Client-ID anfordern
const requestApiKey = (req, res) => {
    const { clientId } = req.body;

    userModel.findUserByClientId(clientId, (err, user) => {
        if (err) return res.status(500).json({ message: 'Datenbankfehler' });
        if (user.length === 0) {
            return res.status(404).json({ message: 'Ungültige Client-ID' });
        }

        // API-Key generieren
        const apiKey = generateApiKey();

        // API-Key in der Datenbank speichern
        userModel.updateApiKey(clientId, apiKey, (err, result) => {
            if (err) return res.status(500).json({ message: 'Datenbankfehler' });

            res.status(200).json({
                message: 'API-Key generiert',
                apiKey: apiKey
            });
        });
    });
};

module.exports = {
    requestApiKey
};
