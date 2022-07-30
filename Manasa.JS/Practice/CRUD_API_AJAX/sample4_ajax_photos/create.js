

var photos = []

function addUser() {
    
    var photo = {
        albumId: document.getElementById("albumId").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        url: document.getElementById("url").value,
        thumbnailUrl: document.getElementById("thumbnailUrl").value

    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/photos/"
    var addUser = new XMLHttpRequest();
    addUser.onreadystatechange = function () {
        if (addUser.readyState == 4 && addUser.status == 200){
            console.log("user Deleted")
            getDataFromServer()
        }
    }
    addUser.open("POST",api_url);
    addUser.setRequestHeader("Content-Type","application/json")

    addUser.send(JSON.stringify(photo))
}