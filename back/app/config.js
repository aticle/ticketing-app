const Auth0Strategy = require('passport-auth0');
const port = 3001;
const baseRoot = 'http://localhost';

const db = 'mongodb://127.0.0.1:27017/ticketing_app_db';
const dbConnectionOptions = { useNewUrlParser: true };

const strategy = new Auth0Strategy(
    {
        domain: 'ticketing-app.eu.auth0.com',
        clientID: 'U8X8mpdOrjqh8xamwNsDQaElnBbZ7ScP',
        clientSecret: 'isSUSgTPlsg1yzeGei6Yxu8d73jE4WZYeg3t5h7i6OUcx66AavzR0Nq8Fg2TtsBB',
        callbackURL: 'http://localhost:3001/callback'
    },
    (accessToken, refreshToken, extraParams, profile, done) => done(null, profile)
);

const configSession = {
    secret: 'CHANGE THIS SECRET',
    cookie: {},
    resave: false,
    saveUninitialized: true
};

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
    dbConnectionOptions,
    strategy,
    configSession
}
