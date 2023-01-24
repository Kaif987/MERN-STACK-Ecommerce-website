require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const cors = require("cors")

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

app.listen(port, () =>{
    console.log("Server running on port " + port)
})