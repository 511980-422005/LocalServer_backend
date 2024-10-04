const express=require("express");
const server=express();
const cors = require("cors");

server.use(express.json());
server.use(cors()); 
 server.get("/",(req,res)=>{
    res.send("Server running successfully");
 })
server.post("/", (req, res) => {
    const {data} = req.body;  
    console.log(data);
    res.send("Got it");
});

server.listen(3000, '192.168.212.43', () => {
    console.log("Server is running on port 192.168.212.43:3000");
});
