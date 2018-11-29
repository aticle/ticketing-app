const handler = require('../controllers');
const express = require('express');
const router = express.Router();

// Get all tickets
router.get('/', handler.GetTickets);

// Get a ticket by ID
router.get('/find/:id', handler.GetTicket);

// Create new ticket
router.post('/create', handler.PostTicket);

// Delete a ticket by ID
router.delete('/delete/:id', handler.DeleteTicket);

// Update a ticket by ID
router.put('/update/:_id', handler.UpdateTicket);

module.exports = router;
