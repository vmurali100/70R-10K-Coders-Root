var globalIndex = null;

function editUser(index) {
    globalIndex = index;

    var newUser = comments[index];

    document.getElementById("postId").value = newUser.postid
    document.getElementById("id").value = newUser.id
    document.getElementById("name").value = newUser.name
    document.getElementById("email").value = newUser.email
    document.getElementById("body").value = newUser.body
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
    
    var comment = {

        postId: document.getElementById("postId").value,
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        name: document.getElementById("name").value,
        body: document.getElementById("body").value,
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/comments/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200){
            getDataFromServer()
        }
    }
    updateUser.open("PUT",api_url+comments[globalIndex].id,comment);
    updateUser.setRequestHeader("Content-Type","application/json")

    updateUser.send(JSON.stringify(comment))

    swapButton(false)
    clearform()
}

function clearform() {
    
    document.getElementById("postId").value = ""
    document.getElementById("id").value = ""
    document.getElementById("name").value = ""
    document.getElementById("name").value = ""
    document.getElementById("body").value = ""
  
}