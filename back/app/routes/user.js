const express = require('express');
const router = express.Router();
const handler = require('../controllers');
const ensureAuthenticated = require('../../lib/middleware/ensureAuthenticated');

router.post('/register', handler.CreateUser);

router.post('/login', handler.LoginUser);

router.get('/me', ensureAuthenticated, handler.GetUser);

router.put('/update', handler.UpdateUser);

module.exports = router;
