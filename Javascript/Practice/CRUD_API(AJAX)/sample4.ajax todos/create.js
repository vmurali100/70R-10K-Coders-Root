var todos = []

function addUser() {

    var todos = {

        userid: document.getElementById("userid").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value,

    };

    // users[globalIndex] = user;
    // displayUsers();
    // clearform();
    // swapbuttons(false)

    var api_url = "http://localhost:3000/todos/"
    var addUser = new XMLHttpRequest();
    addUser.onreadystatechange = function() {
        if (addUser.readyState == 4 && addUser.status == 200) {
            console.log("user Deleted")
            getDataFromServer()
        }
    }
    addUser.open("POST", api_url);
    addUser.setRequestHeader("Content-Type", "application/json")
    addUser.send(JSON.stringify(todos))
}