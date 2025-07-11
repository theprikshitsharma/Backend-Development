let p = new Promise((resolve,reject)=>{
    resolve("okay")

})
//console.log(p);
p.then(()=>{
    console.log(data)
    console.log("promise complete")

})
.catch((err)=>{
    console.log()

})
let products=[
    {
        name: "samsung",
        amount: 70000,
        quantity:10
    },
    {
        name:"Iphone 16",
        amount: 10000,
        quantity:1
    }
]
function isEligible(id){
    return new Promise((resolve,reject)=>{
          let user = users.filter((user)=> user.id==id)[0];
    console.log(user)
    if(!user) return "no user found";
    if(user.age>=18){
        return "eligible for vote"

    }else{
        return "not eligible"
    }
    })
}
isEligible(1).then((data)=>{
    console.log(data)
    
})