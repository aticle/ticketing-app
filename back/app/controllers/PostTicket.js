const Ticket = require('../models/ticket');

// Create ticket
module.exports = (req, res) => {
    const ticket = new Ticket(req.body);
    ticket.save((err, ticket) => {
        if (err) {
            res.status(400).json("Something went wrong");
            return;
        }
        res.status(200).json(ticket);
    });
};
