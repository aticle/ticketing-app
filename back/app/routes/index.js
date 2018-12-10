const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send('Welcome to base root ;)');
});

module.exports = router;
