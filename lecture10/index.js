const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"./index.html")
})

app.listen(5555,()=>{
    console.log("server started")
})