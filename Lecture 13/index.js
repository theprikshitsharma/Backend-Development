const express = require("express");
const app = express();
app.use(express.static(__dirname+"/public"));

app.get("/todos",(req,res)=>{
    
})



app.listen(5555,()=>{
    console.log("server started")
})