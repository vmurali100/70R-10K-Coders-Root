function deleteUser(i) {
    var api_url="http://localhost:3000/users/"
    // var deleteUser = new XMLHttpRequest();
    // deleteUser.onreadystatechange = function () {
    //     if (deleteUser.readyState == 4 && deleteUser.status == 200){
    //         console.log("User Deleted")
    //         getDataFromServer()
    //     }
    // }

    async function handleFetchAsync() {
        var usersInfo = await fetch(api_url) //1st then
        var users = await usersInfo.json(); //2nd then
        console.log(users)
    }


    handleFetchAsync()
    // deleteUser.open("DELETE",api_url+users[i].id);
    // deleteUser.send()
}