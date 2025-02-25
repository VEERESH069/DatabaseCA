const {model,Schema} = require('mongoose');

const foodmenu = new Schema({
    DishName:{
        type:String,
        required:[true,"Please provide the name of Dish"],
    },
    cost:{
        type:Number,
        required:[true,"Please provide the cost"],
    }
})

const menu = model('menu',foodmenu);
module.exports = menu;