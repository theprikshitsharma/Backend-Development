function buyProduct(product_name,cb){
    setTimeout(()=>{
        console.log("order complete");
        cb()
    })
    
}

buyProduct("Iphone 16",function(){
    console.log("product is purchased")
})