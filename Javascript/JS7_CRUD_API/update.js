function updateUser() {
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


function editUser(index) {
    globalIndex = index;
    var newUser = users[index];
    document.getElementById("id").value = newUser.id;
    document.getElementById("email").value = newUser.email;
    document.getElementById("username").value = newUser.username;
    document.getElementById("password").value = newUser.password;
    swapButtons(true)
}

function swapButtons(value) {
    console.log(value)
    if (value == true) {
        document.getElementById("updatebutton").style.display = "block"
        document.getElementById("addbutton").style.display = "none"

    } else {
        document.getElementById("updatebutton").style.display = "none"
        document.getElementById("addbutton").style.display = "block"
    }
}

var api_url = "http://localhost:3000/users"


var updateUser = new XMLHttpRequest();
updateUser.onreadystatechange = function() {
    if (updateUser.readyState == 4 && deleteuser.status == 200) {

        console.log("User Deleted")
        getDataFromServer()
    }
    updateUser.open("PUT", api_url + users[i].id, user);
    updateUser.setRequestHeader("Content-Type", "application/json")
    updateUser.send(JSON.stringify(user))



    updateUser.send()
}