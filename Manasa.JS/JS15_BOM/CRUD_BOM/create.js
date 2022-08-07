function addUser() {
    var user = {
      id: document.getElementById("id").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    var api_url = "http://localhost:3000/users/"

    var createUser = new XMLHttpRequest();
    createUser.onreadystatechange=function(){
        if(createUser.readyState == 4 && createUser.status == 201){
          window.location.href="users.html"
        }
    }
    createUser.open("POST",api_url);
    createUser.setRequestHeader("Content-Type","application/json")
    createUser.send(JSON.stringify(user))
    
    // displayUsers();
    // clearTable();
    // swapButtons(false)
  }