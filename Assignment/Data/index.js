const fs = require("fs");
    let users = [
  { id: 1,
     name: "Parisha", 
     age: "19", 
     purchases: [] 
    },
  { 
    id: 2,
    name: "Prikshit", 
    age: "21", 
    purchases: [] 
}];


let products = [
  { id: 1,
     name: "Fatboy", 
     Model: "2019", 
     purchases: [] 
    },
  { 
    id: 2,
    name: "Honda CBR 250rr", 
    age: "2009", 
    purchases: [] 
}];



fs.writeFile("./users.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written");

});

fs.writeFile("./products.txt",JSON.stringify(products),function(err){
    if(err) return console.log(err);
    console.log("products written");
    });

  fs.writeFile("./orderHistory.txt",JSON.stringify(products),function(err){
    if(err) return console.log(err);
    console.log("order history written");
    });