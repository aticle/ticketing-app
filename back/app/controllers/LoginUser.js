const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const axios = require('axios');
const validateLoginInput = require('../validation/login');
const User = require('../models/user');
const { tokenSecret } = require('../../app/config');

module.exports = (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    const { email, password } = req.body;

    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'A user with this email already exists.';
                res.status(400).json(errors);
            }

            bcryptjs.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            name: user.name,
                            email: user.email,
                            password: user.password
                        };

                        jwt.sign(payload, tokenSecret, {
                            expiresIn: 3600
                        }, (err, token) => {
                            if (err) console.error('Error in token', err);
                            else {
                                // update user token
                                axios.put('users/update', { token });

                                // return token
                                res.status(200).json({
                                    success: true,
                                    token: `Bearer ${token}`
                                });
                            }
                        });
                    } else {
                        errors.password = 'Incorrect Password';
                        res.status(400).json(errors);
                    }
                })
                .catch(err => {
                    console.error('Error in password matching', err);
                });
        })
        .catch(err => {
            console.error("User find error", err);
        });
};
