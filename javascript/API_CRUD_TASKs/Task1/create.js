function addUser(){
    var user = {
        userId: document.getElementById("userId").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        body: document.getElementById("body").value
    };
    var api_url="http://localhost:3000/users/"
    var createUser = new XMLHttpRequest();
    createUser.onreadystatechange = function(){
        if(createUser.readyState == 4 && createUser.status == 200){
           
            getDataFromServer()
        }

    }
    createUser.open("POST",api_url+users[globalindex].Id);
    createUser.setRequestHeader("content-type","application/json")
    createUser.send(JSON.stringify(user))
}
