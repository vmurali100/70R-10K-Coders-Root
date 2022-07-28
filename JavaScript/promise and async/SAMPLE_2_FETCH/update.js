function fetchupdate(){



fetch("http://localhost:3000/comments/4",{
    method: "PUT",
    body : JSON.stringify({
        id: 4,
        name : "Prudhvidhar"
    }),
    headers : {
        "Content-type" : "application/json"
    },
})

.then(res=>res.json())
.then(data => console.log(data));

}

