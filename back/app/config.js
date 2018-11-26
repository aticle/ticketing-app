const port = 3001;
const baseRoot = 'http://localhost';

const db = 'mongodb://127.0.0.1:27017/ticketing_app_db';
const dbConnectionOptions = { useNewUrlParser: true };

// CORS
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, cb) => {
        if (whitelist.indexOf(origin) !== -1) {
            cb(null, true);
        } else {
            cb(new Error('Not allowed by CORS'));
        }
    }
};

module.exports = {
    port,
    baseRoot,
    db,
    dbConnectionOptions
}
