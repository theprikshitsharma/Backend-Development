// function getCommentData(){
//     axios.get("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>{
//     console.log(res.data)
//     })
//     .catch((err)=>{
//         console.log(err.message)
//     })
// }
async function getCommentData() {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/comments")
        console.log(response.data)
    } catch (err) {
        console.log(err.message)
    }
}
getCommentData();

function adduser(email,password){
  console.log("jdejd")
    axios.post('http://localhost:3303/user', {
    email: email,
    password: password
  })
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err.message)
  })

}
adduser("prikshit2419@gmail.com")