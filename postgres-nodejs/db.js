const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    database: "sampleDB",
    password: "admin",
    port: 5432,
    host: "localhost",
});

module.exports = { pool };