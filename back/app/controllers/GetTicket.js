const Ticket = require('../models/ticket');

// Get ticket
module.exports = (req, res) => {
    Ticket.find(req.params, (err, tickets) => {
        if (err) {
            res.json("Something went wrong");
            return;
        }
        res.json(tickets);
    });
};
