const passport = require('passport');
const secured = require('../../lib/middleware/secured');
var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send('Welcome to base root ;)');
});

module.exports = router;