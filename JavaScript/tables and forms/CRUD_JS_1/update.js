var idx = null //global index 

function edituser(index) {

    idx = index // storing index in global variable for use outside this function

    document.getElementById("id").value = users[idx].id
    document.getElementById("email").value = users[idx].email
    document.getElementById("username").value = users[idx].username
    document.getElementById("password").value = users[idx].password
    swapbuttons(true)
}

function updateuser() {

 

    users[idx].id = document.getElementById("id").value,
    users[idx].email = document.getElementById("email").value,
    users[idx].username = document.getElementById("username").value,
    users[idx].password = document.getElementById("password").value

    


    // displayuser();
    // clearform();
    // swapbuttons(false);


    var api_url = "http://localhost:3000/users/"

    var update_user = new XMLHttpRequest();

    update_user.onreadystatechange = function () {
        if (update_user.readyState == 4 && update_user.status == 200) {
            console.log("user updated successfully")
            getDatafromServer()

        }
    }
    update_user.open("PUT", api_url+users[idx].id,users[idx]) ;
    update_user.setRequestHeader("Content-Type", "application/json")
    update_user.send(JSON.stringify(users[idx]))

}



function swapbuttons(value) {
    if (value == true) {
        document.getElementById("updateBtn").style.display = "block";
        document.getElementById("addBtn").style.display = "none";
    }
    else {
        document.getElementById("updateBtn").style.display = "none";
        document.getElementById("addBtn").style.display = "block";
    }

}
