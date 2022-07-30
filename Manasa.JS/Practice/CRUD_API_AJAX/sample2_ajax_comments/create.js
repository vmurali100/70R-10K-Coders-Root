function addUser() {
    
    var comment = {

        postId: document.getElementById("postId").value,
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        body: document.getElementById("body").value
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/comments/"
    var addUser = new XMLHttpRequest();
    addUser.onreadystatechange = function () {
        if (addUser.readyState == 4 && addUser.status == 200){
            getDataFromServer()
        }
    }
    addUser.open("POST",api_url);
    addUser.setRequestHeader("Content-Type","application/json")

    addUser.send(JSON.stringify(comment))
}