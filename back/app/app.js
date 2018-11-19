// Imports
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const { port, db, dbConnectionOptions } = require('./config');
const Ticket = require('./models/ticket.model');

// DB connect
mongoose.connect(db, dbConnectionOptions);
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to DB yaayyy :D');
});

// App 
const app = express();

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));         // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.get('/', (req, res) => {
    res.status(200).send('Text');
});

// Routes
require('./routes')(app);

// Server
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`App listening on port ${port}!`)
});

module.exports = app;
