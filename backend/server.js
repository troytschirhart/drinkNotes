
// load env variables
if (process.env.NODE_ENV != "production") {
    require("dotenv").config()
}

const PORT = process.env.PORT || 8000;

// Import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');
const cors = require('cors');
const drinksController = require('./controllers/drinksController')

// create an express app
const app = express();

// configure express app
app.use(express.json());
app.use(cors());

// connect to db
connectToDb();

// configure app
app.use(cors());
app.use(express.json());

// routing
app.post('/drinks', drinksController.createDrink)           // Create a drink note
app.get('/drinks', drinksController.fetchDrinks)            // Read all drink notes
app.get('/drinks/:id', drinksController.fetchDrink)         // Read a single drink note
app.put('/drinks/:id', drinksController.updateDrink)        // Update a drink note
app.delete('/drinks/:id', drinksController.deleteDrink)     // Delete a drink note

// start the server
app.listen(PORT, () => {
    console.log("listening on PORT " + PORT)
})