function addUser() {
    
    var posts = {
        userId: document.getElementById("userId").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        body: document.getElementById("body").value
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/posts"
    var addUser = new XMLHttpRequest();
    addUser.onreadystatechange = function () {
        if (addUser.readyState == 4 && addUser.status==200){
            getDataFromServer()
        }
    }
    addUser.open("POST",api_url);
    addUser.setRequestHeader("Content-Type","application/json")

    addUser.send(JSON.stringify(posts))
}
