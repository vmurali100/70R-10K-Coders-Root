function editUser(index) {
    globalIndex = index;
    var newUser = elements[index];
    document.getElementById("userId").value = newUser.userId
    document.getElementById("id").value = newUser.id
    document.getElementById("title").value = newUser.title
    document.getElementById("completed").value = newUser.completed
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
    
    var element = {

        userId: document.getElementById("userId").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value,
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/elements/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200){
            getDataFromServer()
        }
    }
    updateUser.open("PUT",api_url+elements[globalIndex].id,element);
    updateUser.setRequestHeader("Content-Type","application/json")

    updateUser.send(JSON.stringify(element))

    swapButton(false)
    clearform()
}

function clearform() {
    document.getElementById("userId").value = ""
    document.getElementById("id").value = ""
    document.getElementById("title").value = ""
    document.getElementById("completed").value = ""
  
}