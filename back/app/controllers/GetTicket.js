const Ticket = require('../models/ticket');

// Get ticket
module.exports = (req, res) => {
    Ticket.find(req.params, (err, tickets) => {
        if (err) {
            res.json(err);
            return;
        }
        res.status(200).json(tickets);
    });
};
