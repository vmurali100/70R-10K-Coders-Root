
function deleteUser(globalIndex){
    var api_url = "http://localhost:3000/names/"
    var deleteUser = new XMLHttpRequest();
    deleteUser.onreadystatechange=function(){
        if(deleteUser.readyState == 4 && deleteUser.status == 200){
            console.log("User Deleted")
            getDataFromServer()
        }

    }
    deleteUser.open("DELETE",api_url+names[globalIndex].id);
    deleteUser.send()
}