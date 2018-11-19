const Ticket = require('../models/ticket.model');

// Get all tickets
module.exports = (req, res) => {
    Ticket.find({}, (err, tickets) => {
        if (err) {
            res.json("Something went wrong");
            return;
        }
        res.json(tickets);
    });
};
