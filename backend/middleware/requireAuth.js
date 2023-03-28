const User = require('../models/user');
const jwt = require('jsonwebtoken');

async function requireAuth(req, res, next) {
    try {
        // read token off cookies
        const token = req.cookies.Authorization;

        // decode the token
        const decoded = jwt.verify(token, process.env.SECRET);

        // check expiration
        if (Date.now() > decoded.exp) return res.sendStatus(401);

        // find user using decoded sub
        const user = await User.findById(decoded.sub);
        if (!user) return res.sendStatus(401);

        // attach user to req
        req.user = user;

        // continue to next
        next();
    } catch(err) {
        console.log(err);
        return res.sendStatus(401);
    }
}

module.exports = requireAuth;

