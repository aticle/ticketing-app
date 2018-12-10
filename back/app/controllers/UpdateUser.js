const User = require('../models/user');

// Update user
module.exports = async (req, res) => {
    try {
        await User.updateOne(req.params, { $set: req.body });
        res.status(200).json('User successfully updated. ');
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};
