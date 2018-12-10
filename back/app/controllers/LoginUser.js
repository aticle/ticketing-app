const jwt = require('jsonwebtoken');
const validateLoginInput = require('../validation/login');
const User = require('../models/user');
const { tokenSecret } = require('../../app/config');
const { compare } = require('../../lib/middleware/crypt');

const generateToken = (payload, tokenSecret, options) => new Promise(
    (resolve, reject) => {
        jwt.sign(payload, tokenSecret, options, (err, res) => {
            if (err) reject(err);
            resolve(res);
        })
    }
);

module.exports = async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            errors.email = 'Email or password invalid. ';
            return res.status(400).json(errors);
        }

        const isMatch = compare(password, user.password);

        if (!isMatch) {
            errors.password = 'Incorrect Password';
            return res.status(400).json(errors);
        }

        const payload = {
            name: user.name,
            email: user.email,
            password: user.password
        };
        const token = await generateToken(payload, tokenSecret, { expiresIn: 3600 });

        // update user token
        await User.updateOne({ email: user.email }, { token });

        // return token
        res.status(200).json({
            success: true,
            token: `Bearer ${token}`
        });
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};
