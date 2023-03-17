const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String},     // beer, liquor, cocktail, wine, sports drink, coffee, ice cream, etc.
    type: {type: String},         // ipa, lager, vodka, whiskey, manhatten, screwdriver, merlot, pinot grigio, etc.
    maker: {type: String},        // brewery, winery, distiller, conglomerate, etc.
    image: {type: String},        // link to an image on the web, e.g.: https://www.breckbrew.com/wp-content/uploads/2021/06/avalanche-ale-lockup-can_featured.png
    description: {type: String},  // from the drink maker, etc.
    rating: {type: String},       // on a scale of 1 to 10
    notes: {type: String},        // textarea where user can record their thoughts on the drink
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;