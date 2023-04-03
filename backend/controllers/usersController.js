
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/user");

async function signup(req, res) {
    try {
        // get the username and password off req body
        const { username, password } = req.body;

        // check the database to see if the username is already in use
        const existingUser = await User.findOne({ username });

        // if so, then return an error 
        if (existingUser) {
            return res.sendStatus(432);

        // if not, then create a new user
        } else {

            // hash password
            const hashedPassword = bcrypt.hashSync(password, 8);

            // create a user with the data
            await User.create({username, password: hashedPassword});
            
            // response
            res.sendStatus(200);
        }
    } catch(err) {
        console.log(err);
        return res.sendStatus(400)
    }
}

async function login(req, res) {
    try {
        // get the username and password off of req body
        const {username, password} = req.body;

        // find the user with the requested username
        const user = await User.findOne({ username })
        if (!user) return res.sendStatus(401);

        // compare sent in password with found user password hash
        const passwordMatch = bcrypt.compareSync(password, user.password);
        if (!passwordMatch) return res.sendStatus(401);

        // create a jwt token for this session
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;  // good for 30 days
        // create a signed token containing the user's id and the experation date
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

        // set the cookie
        res.cookie("Authorization", token, {
            expires: new Date(exp),
            httpOnly: true,
            sameSite: 'none', 
            secure: true 
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