const express = require('express');
const router = express.Router();
const secured = require('../../lib/middleware/secured');

router.get('/user', secured(), (req, res, next) => {
    const { _raw, _json, ...userProfile } = req.user;
    res.status(200).send({
        userProfile: JSON.stringify(userProfile, null, 2),
        title: 'Profile page'
    });
});

module.exports = router;