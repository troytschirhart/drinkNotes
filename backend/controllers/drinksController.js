
const Drink = require('../models/drink');

const createDrink = async (req, res) => {
    try {
        // get the sent in data off request body
        const { name, category, type, maker, image, description, rating, notes } = req.body;

        // create a drink with it
        const drinkNote = await Drink.create({
            name, category, type, maker, image, description, rating, notes, user: req.user._id
        })

        // respond to the new drink
        res.json({ drinkNote })
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const fetchDrinks = async (req, res) => {
    try {
        // find all drinks
        const allDrinks = await Drink.find({user: req.user._id});

        // respond with the found drinks
        res.json({ allDrinks });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const searchDrinks = async (req, res) => {
    // let searchObj = {...req.params.searchForm, user: req.user._id};
    // console.log("searchObj: " + JSON.stringify(searchObj));
    const { name, category, type, maker, image, description, rating, notes } = req.body

    console.log("req.body: " + JSON.stringify(req.body));

    try {
        console.log("category: " + category);
        // find all drinks
        // const foundDrinks = await Drink.find({user: req.user._id, category: category});

        let searchObject = {user: req.user._id};
        if (name !== "") {
            searchObject.name = name;
        }
        if (category !== "") {
            searchObject.category = category;
        }
        if (type !== "") {
            searchObject.type = type;
        }
        if (maker !== "") {
            searchObject.maker = maker;
        }
        if (image !== "") {
            searchObject.image = image;
        }
        if (description !== "") {
            searchObject.description = description;
        }
        if (rating !== "") {
            searchObject.rating = rating;
        }
        if (notes !== "") {
            searchObject.notes = notes;
        }

        console.log("searchObject: " + JSON.stringify(searchObject));

        const foundDrinks = await Drink.find(searchObject);

        // const foundDrinks = await Drink.find({
        //     user: req.user._id, 
        //     name: name,
        //     category: category,
        //     type: type,
        //     maker: maker,
        //     image: image,
        //     description: description,
        //     rating: rating,
        //     notes: notes    
        // });

        // respond with the found drinks
        res.json({ foundDrinks });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const fetchDrink = async (req, res) => {
    try {
        // find the single drink using the drink's id and the user's id 
        const foundDrink = await Drink.findOne({_id: req.params.id, user: req.user._id });

        // respond with the drink 
        res.json({ foundDrink });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const updateDrink = async (req, res) => {
    try {
        // get the id off of the url
        const drinkID = req.params.id;

        // get the data off of the req body;
        const { name, category, type, maker, image, description, rating, notes } = req.body

        // find and update the record
        await Drink.findOneAndUpdate({_id: drinkID, user: req.user._id}, {
            name, category, type, maker, image, description, rating, notes
        })

        // get the updated version
        const updatedDrink = await Drink.findById(drinkID);

        // respond with the updated record
        res.json({ updatedDrink });

    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}

const deleteDrink = async (req, res) => {
    try {
        // get id from url
        const drinkID = req.params.id;

        // delete the record
        const feedback = await Drink.deleteOne({_id: drinkID, user: req.user._id});

        // send a response
        res.json({ success: "drink note deleted" });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
}


module.exports = {
    createDrink, fetchDrinks, fetchDrink, updateDrink, deleteDrink, searchDrinks
}