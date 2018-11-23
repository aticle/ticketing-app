// Imports
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const {
    baseRoot, port,
    db, dbConnectionOptions,
    strategy, configSession,
    corsOptions
} = require('./app/config');
const Ticket = require('./app/models/ticket');
const secured = require('./lib/middleware/secured');
const userInViews = require('./lib/middleware/userInViews');
// routes
const authRouter = require('./app/routes/auth');
const usersRouter = require('./app/routes/users');
const indexRouter = require('./app/routes/index');
const ticketsRouter = require('./app/routes/tickets');

// DB connect
mongoose.connect(db, dbConnectionOptions);
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB');
});

// App 
const app = express();

app.use(cors(corsOptions));
app.use(session(configSession));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));         // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

if (app.get('env') === 'production') {
    configSession.cookie.secure = true; // serve secure cookies, requires https
}

// Configure Passport to use Auth0
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(userInViews());
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/tickets', ticketsRouter);

// Server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`App listening on port ${port}!`)
});

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
