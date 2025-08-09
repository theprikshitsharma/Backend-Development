const signupForm = document.querySelector("#signup");
const email = document.querySelector("#email");
const password = document.querySelector("#password");


function addUser(email,password){
    let newUset = {
        email:email,
        password:password
    }
    fetch("/adduser",{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            "content-type":"application/json"
        }
        
    }).then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })

}
addUser("prikshit2419@gmail.com","123456")