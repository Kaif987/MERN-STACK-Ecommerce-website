const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")

const Schema = mongoose.Schema

const userSchema = Schema(
    {
        username:{type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true}
    }, 
    {timestamps: true}
)

userSchema.statics.signup = async function (username, email, password){
    
    if(!email || !password) {
        throw Error("All the fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Give a valid email")
    }
    
    if(!validator.isStrongPassword(password)){
        throw Error("Give a strong password")
    }

    const exists = await this.findOne( {email} )
    if(exists){
        throw Error("Email is already registered")
    }
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({username, email, password: hash})
    return user
}

userSchema.statics.login = async function (email, password){
    
    if(!email || !password) {
        throw Error("All the fields must be filled")
    }

    const user = await this.findOne( {email} )

    if(!user){
        throw Error("Email has not been registered")
    }
    
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("Invalid Login")
    }
    
    return user
}



module.exports = mongoose.model("User", userSchema)