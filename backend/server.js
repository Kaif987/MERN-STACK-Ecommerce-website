require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const authRoutes = require("./routes/auth")
const cartRoutes = require("./routes/cart")
const User = require("./models/userModel")
// const wishListRoutes = require("./routes/wishlist")
const cors = require("cors")
const app = express()


// middleware
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000
const URI = process.env.ATLAS_URI

mongoose.connect(URI)
const connection = mongoose.connection
connection.once("open", () =>{
    console.log("Successfully connected to mongodb database")
})

// routes

app.use("/api/users", authRoutes)
app.use("/api/cart", cartRoutes)
app.post("/api/profile/", async (req, res) =>{
    const {email} = req.body
    console.log(email)
    const user = await User.findOne({email})
    if(!user) return res.status(400).json({error: "user not found"})
    res.status(200).send({user})
})

// app.use("/api/wishlist", wishListRoutes)

app.listen(port, () =>{
    console.log("Server running on port " + port)
})