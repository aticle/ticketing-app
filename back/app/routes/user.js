const express = require('express');
const router = express.Router();
const { UpdateUser, GetUser, LoginUser, CreateUser } = require('../controllers');
const ensureAuthenticated = require('../../lib/middleware/ensureAuthenticated');

router.post('/register', CreateUser);

router.post('/login', LoginUser);

router.get('/me', ensureAuthenticated, GetUser);

router.put('/update', UpdateUser);

module.exports = router;
