const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cartSchema = Schema(
    {
        title: {type: String, required: true}, 
        image: {type: String, required: true}, 
        price: {type: Number, required: true},
        count:{type: Number, required: true},
        user_id: {type: String, required: true},
    } ,
    {timestamps: true}
)

module.exports = mongoose.model("CartItem", cartSchema)