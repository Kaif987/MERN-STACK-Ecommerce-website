const mongoose = require("mongoose")

const Schema = mongoose.Schema

const WishListItemSchema = Schema(
    {
        _id: {
            type: String,
            default: () => new mongoose.Types.ObjectId().toString()
        },
        image: {type: String, required: true}, 
        title: {type: String, required: true}, 
        price: {type: Number, required: true},
        user_id: {type: String, required: true},
    } ,
    {timestamps: true}
)

module.exports = mongoose.model("WishListItemItem", WishListItemSchema)