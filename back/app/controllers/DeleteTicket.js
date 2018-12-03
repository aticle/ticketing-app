const Ticket = require('../models/ticket');

// Delete ticket
module.exports = (req, res) => {
    Ticket.deleteOne({ _id: req.params.id }, (err, { n, ok }) => {
        if (err) {
            res.status(400).json("Something went wrong. Ticket couldn't be deleted");
            return;
        }
        res.status(200).json(`${n} tickets deleted!`);
    });

};
