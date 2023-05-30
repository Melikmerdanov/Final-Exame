const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://merdanovmelik:melik6949@cluster0.lpjwsmy.mongodb.net/').then(()=>{
    console.log("db connect")
})
