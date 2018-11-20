const Ticket = require('../models/ticket');

// Create ticket
module.exports = (req, res) => {
    const ticket = new Ticket(req.body);
    ticket.save((err, ticket) => {
        if (err) {
            res.json("Something went wrong");
            return;
        }
        res.json("Ticket successfully created");
    });
};
