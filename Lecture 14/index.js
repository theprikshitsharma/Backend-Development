let userContainer = document.querySelector(".user-container");
function Users(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res)
        res.json()
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        data.foreach((user)=>{
            displayUser(user);
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}
getUsers("https://jsonplaceholder.typicode.com/users")

function displayUser(user){
    let li = document.createElement("li");
    li.innerHTML = `<div class = "user-info">
        <hi>${user.name}</hi>
        <p>${user.username}</p>
      </div>
      <div class = "user-btn">
        <button class = "delete-btn">❌</button>
        <button class = "edit-btn">-----</button>
      </div>`
    userContainer.appendChild(li)
    
}