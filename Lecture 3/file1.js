let file1= require("./file2");
console.log(file1);
function mul(a,b){
return a*b;
}
function divide (a,b){
    return a/b
}
module.exports.mul=mul
module.exports.divide=divide