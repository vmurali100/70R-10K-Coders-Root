function editUser(index) {
    globalIndex = index;
    var newUser = lists[index];
    document.getElementById("fname").value = newUser.fname
    document.getElementById("lname").value = newUser.lname

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
    
    var list = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/lists/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200){
            getDataFromServer()
        }
    }
    updateUser.open("PUT",api_url+lists[globalIndex].id,list);
    updateUser.setRequestHeader("Content-Type","application/json")

    updateUser.send(JSON.stringify(list))

    swapButton(false)
    clearform()
}

// function clearform() {
//     document.getElementById("userId").value = ""
//     document.getElementById("id").value = ""
//     document.getElementById("title").value = ""
//     document.getElementById("completed").value = ""
  
// }