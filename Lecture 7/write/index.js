const fs = require("fs")
let users=[
    {
        id:1,
        name:"Prikshit",
        age:"20"
    },
    {
        id:2,
        name: "Rahul",
        age : "25"
    },
]
fs.writeFile("../users.txt", JSON.stringify(users), function(err) {
    if (err) return console.log(err);
    console.log("user written");
});