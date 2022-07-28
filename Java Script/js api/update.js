var globalIndex = null;


function edituser(index) {
    globalIndex = index
    var newuser = users[index]
    document.getElementById("id").value = newuser.id;
    document.getElementById("email").value = newuser.email;
    document.getElementById("username").value = newuser.username;
    document.getElementById("password").value = newuser.password;
    swapButtons(true)

}
function swapButtons(value) {
    console.log(value)
    if (value == true) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    }
    else {
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}
function updateuser() {
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,

    };
   
        var api_url = "http://localhost:3000/users"
        var updateuser = new XMLHttpRequest()
        updateuser.onreadystatechange = function () {
            if (updateuser.readyState == 4 && updateuser.status == 200) {
                getDataFromServer()
            }
        }
        updateuser.open("PUT", api_url+users[globalIndex].id)
        updateuser.setRequestHeader("Content-Type","application/json")
        updateuser.send(JSON.stringify(user))
  
}