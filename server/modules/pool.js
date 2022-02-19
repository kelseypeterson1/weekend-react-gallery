// Connecting to the database and setting up pg & pools

const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'react_gallery',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};

const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('pg connected');
})

pool.on('error', (err, client) => {
    console.log('Unexpected error on idle pg client', err);
    process.exit(-1);
});

module.exports = pool;