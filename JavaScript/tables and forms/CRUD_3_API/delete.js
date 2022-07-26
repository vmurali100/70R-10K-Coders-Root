function deleteuser(gloind){

    var api_url = "http://localhost:3000/car/"

    var delete_user = new XMLHttpRequest();

    delete_user.onreadystatechange = function(){
        if(delete_user.readyState==4 && delete_user.status==200){
            console.log("user deleted successfully")
            getDatafromServer2()

        }
    }
    delete_user.open("DELETE",api_url+car[gloind].id);
    delete_user.send()
    getDatafromServer3()

}