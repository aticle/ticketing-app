const Ticket = require('../models/ticket');

// Create ticket
module.exports = async (req, res) => {
    const newTicket = new Ticket(req.body);

    try {
        const ticket = await newTicket.save();
        res.status(200).json(ticket);
    } catch (err) {
        res.status(400).json("Something went wrong");
    }
};
