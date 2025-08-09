const express = require("express")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))

app.post("/submit", (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email,password);

});

app.listen(4443, () => {
    console.log("server started")
})