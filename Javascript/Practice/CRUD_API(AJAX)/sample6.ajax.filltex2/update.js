function editUser(index) {


    globalIndex = index;
    var newUser = users[index]

    document.getElementById("fname").value = newUser.fname
    document.getElementById("lname").value = newUser.lname

    swapbuttons(true)
}

var globalIndex = null;

function swapbuttons(value) {
    if (value == true) {
        document.getElementById("updateBtn").style.display = "block";
        document.getElementById("addBtn").style.display = "none";
    } else {
        document.getElementById("updateBtn").style.display = "none";
        document.getElementById("addBtn").style.display = "block";
    }
}

function updateuser() {

    var user = {

        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,

    };

    // users[globalIndex] = user;
    // displayUsers();
    // clearform();
    // swapbuttons(false)

    var api_url = "http://localhost:3000/users/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function() {
        if (updateuser.readyState == 4 && updateuser.status == 200) {
            console.log("user Deleted")
            getDataFromServer()
        }
    }
    updateuser.open("PUT", api_url + user[globalIndex].fname, user);
    updateuser.setRequestHeader("Content-Type", "application/json")
    updateuser.send(JSON.stringify(user))
}