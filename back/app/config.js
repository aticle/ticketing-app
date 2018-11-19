const port = 3001;
const baseRoot = 'http://localhost';

const db = 'mongodb://127.0.0.1:27017/ticketing_app_db';
const dbConnectionOptions = { useNewUrlParser: true };

module.exports = {
    port,
    baseRoot,
    db,
    dbConnectionOptions
}
