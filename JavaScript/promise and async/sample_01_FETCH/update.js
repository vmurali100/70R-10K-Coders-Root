var posts = []
fetch("http://localhost:3001/posts/2",{
    method : "PUT",
    body : JSON.stringify({
        id : 2,
        title : "City",
        body : "Beautiful"
    }),
    headers : {
        "Content-Tye":"application/json"
    },
})
.then(res=>res.json())
.then(data=>console.log(data=posts));