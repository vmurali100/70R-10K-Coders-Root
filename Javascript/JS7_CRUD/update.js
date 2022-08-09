var globalIndex = null;

function editUser(index) {
    globalIndex = index;
    var newUser = users[index];
    document.getElementById("id").value = newUser.id;
    document.getElementById("email").value = newUser.email;
    document.getElementById("username").value = newUser.username;
    document.getElementById("password").value = newUser.password;
    swapButtons(true)
  }

  function swapButtons(value){
    console.log(value)
    if(value == true){
        document.getElementById("updateBtn").style.display="block"
        document.getElementById("addBtn").style.display="none"
    }else{
        document.getElementById("updateBtn").style.display="none"
        document.getElementById("addBtn").style.display="block"
    }
  }

  function updateUser() {
    var user = {
      id: document.getElementById("id").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    users[globalIndex] = user;
    displayUsers();
    clearTable();
    swapButtons(false)
  }