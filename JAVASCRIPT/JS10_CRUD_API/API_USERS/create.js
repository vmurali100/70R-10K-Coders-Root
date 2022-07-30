function addUser() {
    
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/user/"
    var addUser = new XMLHttpRequest();
    addUser.onreadystatechange = function () {
        if (addUser.readyState == 4 && addUser.status==200){
            getDataFromServer()
        }
    }
    addUser.open("POST",api_url);
    addUser.setRequestHeader("Content-Type","application/json")

    addUser.send(JSON.stringify(user))
}
