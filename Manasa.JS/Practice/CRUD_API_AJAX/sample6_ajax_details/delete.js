function deleteUser(i) {
    var api_url="http://localhost:3000/details/"
    var deleteUser = new XMLHttpRequest();
    deleteUser.onreadystatechange = function () {
        if (deleteUser.readyState == 4 && deleteUser.status == 200){
            console.log("User Deleted")
            getDataFromServer()
        }
    }
    deleteUser.open("DELETE",api_url+details[i].id);
    deleteUser.send()
}