var api_url = "http://localhost:3000/users/";
function getUserIndex() {
    var url = window.location.href
    var userIndex = url.substring(url.lastIndexOf("?") + 1)
    console.log(userIndex);
    fetch(api_url + userIndex).then((data) => data.json()).then((response) => {
        console.log(response);
    })
}
getUserIndex()

function updateUser() {

    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };
    var api_url = "http://localhost:3000/user/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200) {
            getDataFromServer()
        }
    }
    updateUser.open("put", api_url + users[globalIndex].id, user);
    updateUser.setRequestHeader("Content-Type", "application/json")

    updateUser.send(JSON.stringify(user))
}
