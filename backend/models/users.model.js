const { default: mongoose } = require("mongoose");
const Mongoose  = require("mongoose");

const userSchema = new Mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true , required: true},
    password: {type: String, required: true}
},
{timestamps: true})

const User = mongoose.model("User", userSchema)

module.exports = User
