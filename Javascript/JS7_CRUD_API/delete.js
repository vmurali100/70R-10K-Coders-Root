function deleteuser(i) {

    var api_url = "http://localhost:3000/users"


    var deleteuser = new XMLHttpRequest();
    deleteuser.onreadystatechange = function() {
        if (deleteuser.readyState == 4 && deleteuser.status == 200) {

            console.log("User Deleted")
            getDataFromServer()
        }
        deleteuser.open("DELETE", api_url + users[i].id);
        deleteuser.send()
    }
}