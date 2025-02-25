const {model,Schema} = require('mongoose');

const hotelName = new Schema({
    MenuItems:[{
        id:{
            type:String,
            reequired:true,
        },
        dish:{
            type:String,
            required:[true,"Please provide the dish name"],
        },
        cost:{
            type:Number,
            required:[true,"Please provide the cost"]
        },
    }]
    

})
const restaurant = model('restaurant',hotelName);
module.exports = restaurant;