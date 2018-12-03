const jwt = require('jsonwebtoken');
const { tokenSecret } = require('../../app/config');
const validateLoginInput = require('../validation/login');
const User = require('../models/user');

module.exports = (req, res) => {
    res.status(200).send(req.user);
};
