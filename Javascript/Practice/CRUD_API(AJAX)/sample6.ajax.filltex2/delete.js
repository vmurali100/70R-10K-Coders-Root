function deleteUser(globalIndex) {
    var api_url = "http://localhost:3000/users/"
    var deleteUser = new XMLHttpRequest();
    deleteUser.onreadystatechange = function() {
        if (deleteUser.readyState == 4 && deleteUser.status == 200) {
            console.log("user Deleted")
            getDataFromServer()
        }
    }
    deleteUser.open("DELETE", api_url + users[globalIndex].fname);
    deleteUser.send();
}