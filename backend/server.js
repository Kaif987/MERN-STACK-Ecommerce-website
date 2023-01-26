require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("./models/users.model")
const app = express()


app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000
const URI = process.env.ATLAS_URI


mongoose.connect(URI)
const connection = mongoose.connection
connection.once("open", () =>{
    console.log("Successfully connected to mongodb database")
})

const checkIfEmailExists = async (email) =>{
    const user = await User.findOne({email})
    return (user !== null )
}

app.post("/api/register", async (req, res) =>{
    if(await checkIfEmailExists(req.body.email)){
        return res.status(400).json({error:"User has already register with this email"})
    }
    await bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if(err){
            res.status(400).json({"error":"Error in hashing the password"})
        }
        const user = new User({username: req.body.username, email: req.body.email, password: hash})
        user.save()
            .then(() => res.status(201).send("Success User Saved"))
            .catch((err) => res.status(400).send("Bad Request"))
    })
})

app.post("/api/login", async (req, res) =>{
    const { email, password } = req.body;
    const user = await User.findOne({email: email})
    if(!user) return res.status(400).send("No user found with that email addresss")

    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if(!isPasswordCorrect){
        return res.status(401).json({error: "Invalid email or password"})
    }
    
    const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY);
    res.json({ token });
})



app.listen(port, () =>{
    console.log("Server running on port " + port)
})