const Ticket = require('../models/ticket');

// Update ticket
module.exports = (req, res) => {
    Ticket.updateOne(req.params, { $set: req.body }, (err, ticket) => {
        if (err) {
            res.status(400).json("Something went wrong. Ticket couldn't be updated");
            return;
        }
        res.status(200).json("Ticket updated!");
    });

};
