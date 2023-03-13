
const Drink = require('../models/drink');

const createDrink = async (req, res) => {
    // get the sent in data off request body
    const { name, category, type, maker, image, description, rating, notes } = req.body;

    // create a drink with it
    const drink = await Drink.create({
        name, category, type, maker, image, description, rating, notes
    })

    // respond to the new drink
    res.json({ drink })
}

const fetchDrinks = async (req, res) => {
    // find all drinks
    const allDrinks = await Drink.find();

    // respond with the found drinks
    res.json({ allDrinks });
}

const fetchDrink = async (req, res) => {
    // get the id off of the url 
    const drinkID = req.params.id;

    // find the single drink using the id
    const foundDrink = await Drink.findById(drinkID);

    // respond with the drink 
    res.json({ foundDrink });
}

const updateDrink = async (req, res) => {
    // get the id off of the url
    const drinkID = req.params.id;

    // get the data off of the req body;
    const { name, category, type, maker, image, description, rating, notes } = req.body

    // find and update the record
    await Drink.findByIdAndUpdate(drinkID, {
        name, category, type, maker, image, description, rating, notes
    })

    // get the updated version
    const updatedDrink = await Drink.findById(drinkID);

    // respond with the updated record
    res.json({ updatedDrink });
}

const deleteDrink = async (req, res) => {
    // get id from url
    const drinkID = req.params.id;

    // delete the record
    const feedback = await Drink.findByIdAndDelete(drinkID);

    // send a response
    res.json({ success: "drink note deleted" });
}


module.exports = {
    createDrink, fetchDrinks, fetchDrink, updateDrink, deleteDrink
}