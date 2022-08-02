
function fetchdelete(gloind){

var api_url = "http://localhost:3000/comments/"

deleteurl =  api_url + comments[gloind].id

console.log(deleteurl)

 

fetch(deleteurl,{

    method : "DELETE"
})

.then(res=>getDatafromServer())
}