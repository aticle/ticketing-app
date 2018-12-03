const port = 3001;
const baseRoot = 'http://localhost';

// DB
const db = 'mongodb://127.0.0.1:27017/ticketing_app_db';
const dbConnectionOptions = { useNewUrlParser: true };

// jwt
const tokenSecret = 'pvpnCCZfwOF85pBjbOebZiYIDhZ3w9LZrKwBZ7152K89mPCOHtbRlmr5Z91ci4L';

module.exports = {
    port,
    baseRoot,
    db,
    dbConnectionOptions,
    tokenSecret
}
