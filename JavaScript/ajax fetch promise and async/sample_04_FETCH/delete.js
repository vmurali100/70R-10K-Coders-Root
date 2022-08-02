

function fetchdelete(gloind){

var api_url = "http://localhost:3000/todos/"

console.log(todos)

deleteurl = api_url+todos[gloind].id 

console.log(deleteurl)

fetch(deleteurl,{
        method:"DELETE"
    })

    .then(res=>getuserdata())

}