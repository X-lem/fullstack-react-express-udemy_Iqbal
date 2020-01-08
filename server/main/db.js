const { Pool } = require('pg');
const secure = require('./secure.json');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: secure.DBName,
    password: secure.DBPassword,
    port: 5432
});

module.exports = pool;