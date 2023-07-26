const dotenv = require('dotenv');
dotenv.config();

const mssql = require('mssql');

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },options: {
        encrypt: false,
        trustServerCertificate: false,
    },
};

module.exports = sqlConfig;
