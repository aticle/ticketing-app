const Ticket = require('../models/ticket');

// Get all tickets
module.exports = async (req, res) => {
    try {
        const tickets = await Ticket.find({});
        res.status(200).json(tickets);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};
