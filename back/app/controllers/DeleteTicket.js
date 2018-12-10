const Ticket = require('../models/ticket');

// Delete ticket
module.exports = async (req, res) => {
    try {
        const { n, ok } = await Ticket.deleteOne(req.params);
        res.status(200).json(`${n} tickets deleted!`);
    } catch (err) {
        res.status(400).json("Something went wrong. Ticket couldn't be deleted");
    }
};
