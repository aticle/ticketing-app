const jwt = require('jsonwebtoken');
const validateLoginInput = require('../validation/login');
const User = require('../models/user');

module.exports = (req, res) => {
    const { erros, isValid } = validateLoginInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    const { email, password } = req.body;

    User.findOne({ email }).then(user => {
        if (!user) {
            errors.email = 'A user with this email already exists.';
            return res.status(400).json(errors);
        } else {


        }
    });
};
