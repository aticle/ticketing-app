const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validateRegisterInput = require('../validation/register');
const User = require('../models/user');

module.exports = (req, res) => {
    const { erros, isValid } = validateRegisterInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    User.findOne({
        email: req.body.mail
    })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'A user with this email already exists.' });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    if (err) console.error('Error in salting', err);
                    else {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) console.error('Error in hashing', hash);
                            else {
                                newUser.password = hash;
                                newUser.save()
                                    .then(user => {
                                        res.status(200).json(user);
                                    })
                                    .catch(err => console.error('Error in saving user', err));
                            }
                        });
                    }
                });
            }
        })
        .catch(err => {
            console.error('Error fining user', err);
        });
};
