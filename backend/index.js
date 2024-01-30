import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "http";
import cors  from "cors";

dotenv.config();

const app = express();


app.use(cors());
const server = createServer(app);
const io = new Server(server , {
    cors : {
        origin : "*",
        methods : ["GET", "POST"],
        credentials : true
    }
});

(async function(){
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database is running");
    } catch (error) {
        console.log(error)
    }
})();

app.get("/",()=>{
    
})


io.on("connection",(socket)=>{
    console.log(socket.id);
    socket.emit("A", socket.id);
    socket.on("hi",(data)=>{
        console.log(data);
    })
})

server.listen(process.env.PORT,()=>{console.log("server started")});