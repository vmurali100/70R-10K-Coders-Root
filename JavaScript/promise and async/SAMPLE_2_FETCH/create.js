
function fetchcreate(){



fetch("http://localhost:3000/comments/",{
    method : "POST",
    body:JSON.stringify({
        postid :105,
        id : 505,
        name : "Rathna",
        email : "rathna.prudhvi@gmail.com",
        body : "DO well in javascript"
     }),
     headers : {
        "Content-Type":"application/json"
     },
})
.then(response=>response.json())
.then(data =>console.log(data));

}