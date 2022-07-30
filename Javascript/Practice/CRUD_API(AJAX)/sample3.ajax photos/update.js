var globalIndex = null;

function editUser(index) {
    globalIndex = index;

    var newUser = photos[index];

    document.getElementById("albumid").value = newUser.albumid
    document.getElementById("id").value = newUser.id
    document.getElementById("title").value = newUser.title
    document.getElementById("url").value = newUser.url
    document.getElementById("thumbnailurl").value = newUser.thumbnailurl
    swapButton(true)
}

function swapButton(value) {
    if (value === true) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    } else {
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}

function updateuser() {

    var photo = {

        albumid: document.getElementById("albumid").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        url: document.getElementById("url").value,
        thumbnailurl: document.getElementById("thumbnailurl").value,

    };

    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url = "http://localhost:3000/photos/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function() {
        if (updateUser.readyState == 4 && updateUser.status == 200) {
            getDataFromServer()
        }
    }
    updateUser.open("PUT", api_url + photos[globalIndex].id, photo);
    updateUser.setRequestHeader("Content-Type", "application/json")

    updateUser.send(JSON.stringify(photo))

    swapButton(false)
    clearform()
}

function clearform() {

    document.getElementById("albumid").value = " "
    document.getElementById("id").value = " "
    document.getElementById("title").value = " "
    document.getElementById("url").value = " "
    document.getElementById("thumbnailurl").value = " "
}