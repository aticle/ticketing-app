const jwt = require('jsonwebtoken');
const moment = require('moment');
const { tokenSecret } = require('../../app/config');
const User = require('../../app/models/user');

module.exports = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({ error: 'TokenMissing' });
    }
    const token = req.headers.authorization.split(' ')[1];

    let payload = null;
    try {
        payload = jwt.verify(token, tokenSecret);
    } catch (err) {
        return res.status(401).send({ error: 'TokenInvalid' });
    }

    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ error: 'TokenExpired' });
    }

    try {
        const user = await User.findOne({ email: payload.email });

        if (!user) return res.status(401).send({ error: 'UserNotFound' });

        req.user = user;
        next();
    } catch (err) {
        res.status(500);
    }


    User.findOne({ email: payload.email }, (err, user) => {
        if (!user) return res.status(401).send({ error: 'UserNotFound' });
        req.user = user;
        next();
    });
};