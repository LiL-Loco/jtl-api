const express = require('express');
const router = express.Router();
const appRegistrationController = require('../controllers/appRegistrationController');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');

// API-Key-Middleware für alle Endpunkte anwenden
router.use(apiKeyMiddleware);

// Beispielrouten
router.get('/', appRegistrationController.getAllAppRegistrations);
router.post('/', appRegistrationController.createAppRegistration);
router.get('/:id', appRegistrationController.getAppRegistrationById);
router.put('/:id', appRegistrationController.updateAppRegistration);
router.delete('/:id', appRegistrationController.deleteAppRegistration);

module.exports = router;
