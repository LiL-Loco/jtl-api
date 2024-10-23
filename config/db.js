const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'd041bef0',
    password: 'J5CAiXjLmf92yVPGQ4GW',
    database: 'd041bef0'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL verbunden...');
});

module.exports = db;
