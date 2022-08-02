

function fetchcreate(){

    var api_url = "http://localhost:3000/todos"

    var temp1 = {
        id : document.getElementById("id").value,
        title : document.getElementById("title").value,
        completed : document.getElementById("completed").value
    }
    

    fetch(api_url,{
        method : "POST",
        body : JSON.stringify(temp1),
        headers : {
            "Content-Type":"application/json"
        },
    })
    .then(res=>getuserdata())
   
   
}