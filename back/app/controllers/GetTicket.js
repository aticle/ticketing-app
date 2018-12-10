const Ticket = require('../models/ticket');

// Get ticket
module.exports = async (req, res) => {
    try {
        const ticket = await Ticket.find(req.params);
        res.status(200).json(ticket);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};
