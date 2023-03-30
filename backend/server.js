
// load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config()
}

const PORT = process.env.PORT || 8000;

// Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const drinksController = require('./controllers/drinksController')
const usersController = require('./controllers/usersController');
const requireAuth = require('./middleware/requireAuth');

// create an express app
const app = express();

// configure express app
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: true,
        credentials: true
    })
);

// connect to db
connectToDb();

// routing
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/check-auth', requireAuth, usersController.checkAuth);

app.post('/drinks', requireAuth, drinksController.createDrink)             // Create a drink note
app.get('/drinks', requireAuth, drinksController.fetchDrinks)              // Read all drink notes

app.put('/drinks/search', requireAuth, drinksController.searchDrinks) // Search drink notes

app.get('/drinks/:id', requireAuth, drinksController.fetchDrink)           // Read a single drink note
app.put('/drinks/:id', requireAuth, drinksController.updateDrink)          // Update a drink note
app.delete('/drinks/:id', requireAuth, drinksController.deleteDrink)       // Delete a drink note

// start the server
app.listen(PORT, () => {
    console.log("listening on PORT " + PORT)
})