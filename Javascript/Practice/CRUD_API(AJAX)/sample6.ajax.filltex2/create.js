var users = []

function addUser() {

    var user = {

        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,

    };

    // users[globalIndex] = user;
    // displayUsers();
    // clearform();
    // swapbuttons(false)

    var api_url = "http://localhost:3000/users"
    var addUser = new XMLHttpRequest();
    addUser.onreadystatechange = function() {
        if (addUser.readyState == 4 && addUser.status == 200) {
            console.log("user Deleted")
            getDataFromServer()
        }
    }
    addUser.open("POST", api_url);
    addUser.setRequestHeader("Content-Type", "application/json")
    addUser.send(JSON.stringify(user))
}