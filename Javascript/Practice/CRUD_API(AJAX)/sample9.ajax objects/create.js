function adduser() {

    var user = {

        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,

    };

    // users[globalIndex] = user;
    // displayUsers();
    // clearform();
    // swapbuttons(false)

    var api_url = "http://localhost:3000/objects/"
    var createuser = new XMLHttpRequest();
    createuser.onreadystatechange = function() {
        if (createuser.readyState == 4 && createuser.status == 200) {
            console.log("user Deleted")
            getDataFromServer()
        }
    }
    createuser.open("POST", api_url);
    createuser.setRequestHeader("Content-Type", "application/json")
    createuser.send(JSON.stringify(user))
}