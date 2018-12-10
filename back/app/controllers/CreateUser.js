const validateRegisterInput = require('../validation/register');
const User = require('../models/user');
const crypt = require('../../lib/middleware/crypt');

module.exports = async (req, res) => {
    const { erros, isValid } = validateRegisterInput(req.body);

    if (!isValid) return res.status(400).json(errors);

    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) return res.status(400).json({ email: 'A user with this email can not be created.' });

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: crypt.hash(req.body.password)
        });

        try {
            res.status(200).json(await newUser.save());
        } catch (err) {
            console.error(err);
            res.status(500);
        }
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};
