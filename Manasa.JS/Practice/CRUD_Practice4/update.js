var globalIndex = null;

function editUser(index) {
    globalIndex = index;
    var newuser = users[index]
    document.getElementById("fname").value = newuser.fname;
    document.getElementById("lname").value = newuser.lname;
    swapbuttons(True) //to get updated need to use true.

}

function swapbuttons(value) {
    console.log(value)
    if (value == True) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    } else {

        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}

function updateUser() {
    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
    }
    users[globalIndex] = user;
    displayUsers();
    clearTable();
    swapbuttons(False)
}
