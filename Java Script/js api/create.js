var users = [];
function adduser() 
function createuser() {
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,

    };
   
        var api_url = "http://localhost:3000/users"
        var createuser = new XMLHttpRequest()
        createuser.onreadystatechange = function () {
            if (createuser.readyState == 4 && createuser.status == 200) {
                getDataFromServer()
            }
        }
        createuser.open("POST", api_url+users[globalIndex].id)
        createuser.setRequestHeader("Content-Type","application/json")
        createuser.send(JSON.stringify(user))
  
}