function edituser(index) {
    globalindex = index;
    var newuser = users[index]
    document.getElementById("id").value = newuser.id
    document.getElementById("email").value = newuser.email
    document.getElementById("username").value = newuser.username
    document.getElementById("Password").value = newuser.password

    swapbuttons(true)
}

var globalindex = null;

function swapbuttons(value) {
    console.log(value);
    if (value == true) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    } else {
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}

function updateuser() {
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("Password").value,
    }
    users[globalindex] = user
    cleartable();
    swapbuttons(false)
}
displayUsers()