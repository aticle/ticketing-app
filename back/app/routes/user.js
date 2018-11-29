const express = require('express');
const router = express.Router();
const handler = require('../controllers');

router.post('/register', handler.CreateUser);

router.post('/login', handler.LoginUser);

router.get('/me', handler.GetUser);

module.exports = router;
