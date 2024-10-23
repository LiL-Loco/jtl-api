const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// API-Key anfordern basierend auf Client-ID
router.post('/requestApiKey', authController.requestApiKey);

module.exports = router;
