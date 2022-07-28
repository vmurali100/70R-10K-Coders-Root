function deleteuser(gloind){

    var api_url = "http://localhost:3000/posts/"

    var delete_user = new XMLHttpRequest();

    delete_user.onreadystatechange = function(){
        if(delete_user.readyState==4 && delete_user.status==200){
            console.log("user deleted successfully")
            getDatafromServer()
          

        }
    }

    delete_user.open("DELETE",api_url+posts[gloind].id);
    delete_user.send()
    

}