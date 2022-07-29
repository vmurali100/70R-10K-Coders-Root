function editUser(index) {
    globalIndex = index;
    var newUser = users[index];
    document.getElementById("albumId").value = newUser.albumId
    document.getElementById("id").value = newUser.id
    document.getElementById("title").value = newUser.title
    document.getElementById("url").value = newUser.url
    document.getElementById("thumbnailUrl").value = newUser.thumbnailUrl
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

    var Photos = {
        albumId: document.getElementById("albumId").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        url: document.getElementById("url").value,
        thumbnailUrl: document.getElementById("thumbnailUrl").value
    };
    users[globalIndex] = Photos;
    displayUsers()
    clearTable()
    swapButton(false)
    var api_url = "http://localhost:3000/Photos"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200) {
            getDataFromServer()
        }
    }
    updateUser.open("put", api_url + users[globalIndex].albumId, Photos);
    updateUser.setRequestHeader("Content-Type", "application/json")

    updateUser.send(JSON.stringify(Photos))
}
