const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const dotenv = require('dotenv');

// Env Variablen laden
dotenv.config();

const appRegistrationRoutes = require('./routes/appRegistrationRoutes');
const authRoutes = require('./routes/authRoutes');

// Body-Parser Middleware
app.use(bodyParser.json());

// Routen
app.use('/appRegistrations', appRegistrationRoutes);
app.use('/auth', authRoutes);

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
