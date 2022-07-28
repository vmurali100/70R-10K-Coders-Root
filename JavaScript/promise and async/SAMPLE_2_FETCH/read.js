function fetchget(){

    api_url ="http://localhost:3000/comments"
    fetch(api_url)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}