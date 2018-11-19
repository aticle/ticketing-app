const Ticket = require('../models/ticket.model');

// Update ticket
module.exports = (req, res) => {
    Ticket.updateOne(req.params, { $set: req.body }, (err, ticket) => {
        if (err) {
            res.json("Something went wrong. Ticket couldn't be updated");
            return;
        }
        res.json("Ticket updated!");
    });

};
