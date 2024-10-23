const userModel = require('../models/userModel');

// Middleware zur API-Key Überprüfung
const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.header('x-api-key');

    if (!apiKey) {
        return res.status(401).json({ message: 'API key fehlt' });
    }

    userModel.findUserByApiKey(apiKey, (err, user) => {
        if (err) return res.status(500).json({ message: 'Datenbankfehler' });
        if (user.length === 0) {
            return res.status(403).json({ message: 'Ungültiger API key' });
        }
        // API-Key ist gültig
        next();
    });
};

module.exports = apiKeyMiddleware;
