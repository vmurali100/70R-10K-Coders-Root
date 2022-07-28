function createUser() {
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,

    };
    // users[globalIndex] = user;
    // displayUsers();
    // clearTable()
}




var api_url = "http://localhost:3000/users"


var createUser = new XMLHttpRequest();
createUser.onreadystatechange = function() {
    if (createUser.readyState == 4 && deleteUser.status == 200) {

        console.log("User Deleted")
        getDataFromServer()
    }
    createUser.open("POST", api_url + users[i].id, user);
    createUser.setRequestHeader("Content-Type", "application/json")
    createUser.send(JSON.stringify(user))




    createUser.send()
}