
function deleteuser(globalindex) {
    var api_url = "http://localhost:3000/todos/"
    var delete_user = new XMLHttpRequest()

    delete_user.onreadystatechange = function(){
        if(delete_user.readyState==4 && delete_user.status==200){
            getDatafromServer()
            console.log("user deleted")
            displayuser(todos)
        }
    }
    delete_user.open("DELETE",api_url+todos[globalindex].id);
    delete_user.send()
}