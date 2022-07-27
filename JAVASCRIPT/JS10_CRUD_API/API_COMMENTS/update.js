function editUser(index) {
    globalIndex = index;
    var newUser = users[index];
    document.getElementById("postId").value = newUser.postId
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
function updateUser() {

    var comments = {
        postId: document.getElementById("postId").value,
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        body: document.getElementById("body").value
    };
    users[globalIndex] = comments;
    displayUsers()
    clearTable()
    swapButton(false)
    var api_url = "http://localhost:3000/comments"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200) {
            getDataFromServer()
        }
    }
    updateUser.open("put", api_url + users[globalIndex].postId, comments);
    updateUser.setRequestHeader("Content-Type", "application/json")

    updateUser.send(JSON.stringify(comments))
}
