// Imports
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');

const {
    baseRoot, port,
    db, dbConnectionOptions
} = require('./app/config');
const Ticket = require('./app/models/ticket');
// routes
const indexRouter = require('./app/routes/index');
const ticketsRouter = require('./app/routes/tickets');
const userRouter = require('./app/routes/user');

// DB connect
mongoose.connect(db, dbConnectionOptions);
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to tickets DB');
});

// App 
const app = express();

app.use(cors());
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));         // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// Routes
app.use('/', indexRouter);
app.use('/tickets', ticketsRouter);
app.use('/users', userRouter);

// Server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`App listening on port ${port}!`)
});
