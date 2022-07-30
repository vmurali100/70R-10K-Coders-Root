function editUser(index) {
    globalIndex = index;
    var newUser = users[index];
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
function updateUser() {

    var Todos = {
        userId: document.getElementById("userId").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value
    };
    users[globalIndex] = Todos;
    displayUsers()
    clearTable()
    swapButton(false)
    var api_url = "http://localhost:3000/Todos"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200) {
            getDataFromServer()
        }
    }
    updateUser.open("put", api_url + users[globalIndex].userId, Todos);
    updateUser.setRequestHeader("Content-Type", "application/json")

    updateUser.send(JSON.stringify(Todos))
}
