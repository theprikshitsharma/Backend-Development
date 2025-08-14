const express = require("express");
const mongoose =  require ('mongoose');
const app = express();
const Blog = require("./model/blog")
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/blogs",async(req,res)=>{
    let title = req.body;
    let body = req.body;
    let blog ={
        title:title,
        body:body,
        date:Date.now()
    }
    let newBlog = new Blog(blog)
    await newBlog.save()
    res.json({
        sucess:true,
        message:"blog added sucessfully",

    })
})

mongoose.connect('mongodb://127.0.0.1:5556/G27DBs')
    .then(()=> console.log('Connected'));
app.listen(5556,()=>{
    console.log("server started")
})