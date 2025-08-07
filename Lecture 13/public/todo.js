let todoInput = document.querySelector(".todoFTitle");
let todoForm = document.querySelector("#todoForm");
let todoContainer = document.querySelector(".todoContainer");



todoForm.addEventListener("submit",function(e){
    let value = inputValue();
    let newTodo = {
        id:Math.floor(Math.random*10000),
        title:value
    }

})
function inputValue(){
    return todoInput.value
}
function addTodo(todo){
 let li = document.createElement("li");
    li.setAttribute("id",`${todo.id}`)
    li.innerHTML = `<div>
                <input type = "checkbox" name ="" id = "checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class = "edit">----</button>
                    <button class = "delete">❌</button>
                    <p> Hello there </p>
                </div>

            </div>`
ul.appendChild(li);

}