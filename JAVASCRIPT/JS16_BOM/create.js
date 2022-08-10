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
    var createUser = new XMLHttpRequest();
    createUser.onreadystatechange = function () {
        if (createUser.readyState == 4 && createUser.status==201){
            window.location.href="index1.html"
        }
    }
    createUser.open("POST",api_url);
    createUser.setRequestHeader("Content-Type","application/json")

    createUser.send(JSON.stringify(user))

    
}
