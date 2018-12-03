const User = require('../models/user');

// Update user
module.exports = (req, res) => {
    User.updateOne(req.params, { $set: req.body }, (err, ticket) => {
        if (err) {
            res.status(400).json("Something went wrong. User couldn't be updated");
            return;
        }
        res.status(200).json("User updated!");
    });
};
