
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

async function signup(req, res) {
    try {
        // get the email and password off req body
        const { email, password } = req.body;

        // hash password
        const hashedPassword = bcrypt.hashSync(password, 8);

        // create a user with the data
        await User.create({email, password: hashedPassword});
        
        // response
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        return res.sendStatus(400)
    }
}

async function login(req, res) {
    try {
        // get the email and password off of req body
        const {email, password} = req.body;

        // find the user with the requested email
        const user = await User.findOne({ email })
        if (!user) return res.sendStatus(401);

        // compare sent in password with found user password hash
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) return res.sendStatus(401);

        // create a jwt token
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

        // set the cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === "production"
        })

        // respond with success status
        res.sendStatus(200);
    } catch(err) {
        console.log(err);
        return res.sendStatus(400);
    }
    
}

function logout(req, res) {
    try {
        // delete the cookie
        res.clearCookie("Authorization");

        // respond
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

function checkAuth(req, res) {
    try {
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        return res.sendStatus(400);
    }
}

module.exports = {
    signup,
    login,
    logout,
    checkAuth
};