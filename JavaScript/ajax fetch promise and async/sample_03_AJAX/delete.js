
function deleteuser(globalindex) {
    var api_url = "  http://localhost:3000/photos/"
    var delete_user = new XMLHttpRequest()

    delete_user.onreadystatechange = function(){
        if(delete_user.readyState==4 && delete_user.status==200){
            getDatafromServer()
            console.log("user deleted")
            displayuser(photos)
        }
    }
    delete_user.open("DELETE",api_url+photos[globalindex].id);
    delete_user.send()
}