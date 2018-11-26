const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../validation/register');
const User = require('../models/user');

module.exports = (req, res) => {
    const { erros, isValid } = validateRegisterInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    User.findOne({
        email: req.body.mail
    }).then(user => {
        if (user) {
            return res.status(400).json({ email: 'A user with this email already exists.' });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });


        }
    });
};
