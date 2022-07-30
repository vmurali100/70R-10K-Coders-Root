function editUser(index) {
    globalIndex = index;
    var newUser = details[index];
    document.getElementById("fname").value = newUser.fname
    document.getElementById("lname").value = newUser.lname
    document.getElementById("tel").value = newUser.tel
    document.getElementById("address").value = newUser.address
    document.getElementById("city").value = newUser.city
    document.getElementById("state").value = newUser.state
    document.getElementById("zip").value = newUser.zip

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
    
    var detail = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value,
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/details/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200){
            getDataFromServer()
        }
    }
    updateUser.open("PUT",api_url+details[globalIndex].id,detail);
    updateUser.setRequestHeader("Content-Type","application/json")

    updateUser.send(JSON.stringify(detail))

    swapButton(false)
    clearform()
}

// function clearform() {
//     document.getElementById("userId").value = ""
//     document.getElementById("id").value = ""
//     document.getElementById("title").value = ""
//     document.getElementById("completed").value = ""
  
// }