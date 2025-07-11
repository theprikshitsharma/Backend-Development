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
// function buyProduct(product_name,cb){
//     setTimeout(()=>{
//         console.log("order complete");
//         cb()
//     })
    
// }

buyProduct("Iphone 16",function(){
    console.log("product is purchased");
})
function buyProduct(product_name,cb){
    let isproduct = null
    for(let i=0; i<products.length;i++){
        if(product[i].name==product_name){
            isproduct = products[i];
        }
    }

if(!isproduct){
    cb("product is not available",null)
}else{
    cb(null,isproduct.amount);
}
}