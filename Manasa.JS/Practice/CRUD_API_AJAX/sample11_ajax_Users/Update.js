function editUser(index) {
    globalIndex = index;
    var newUser = Users[index];
    document.getElementById("id").value = newUser.id
    document.getElementById("email").value = newUser.email
    document.getElementById("username").value = newUser.username
    document.getElementById("password").value = newUser.password
    swapButton(true)
}
function swapButton(value) {
    if (value === true) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    }
    else {
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}
function updateuser() {
    
    var User = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/Users/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200){
            getDataFromServer()
        }
    }
    updateUser.open("PUT",api_url+Users[globalIndex].id,User);
    updateUser.setRequestHeader("Content-Type","application/json")

    updateUser.send(JSON.stringify(User))
}