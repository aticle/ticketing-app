module.exports = function () {
    return (req, res, next) => {
        res.locals.user = req.user;
        next();
    };
};
