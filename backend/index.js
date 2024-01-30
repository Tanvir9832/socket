const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

(async function(){
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database is running");
    } catch (error) {
        console.log(error)
    }
})();

app.get("/",()=>{
    res.send("HI");
})

app.listen(process.env.PORT,()=>{console.log("server started")});