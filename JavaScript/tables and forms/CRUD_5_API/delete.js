
function deleteuser(indexglobal){

    api_url = "http://localhost:3000/employee/"

    var delete_user = new XMLHttpRequest()

    delete_user.onreadystatechange = function(){
        if(delete_user.readyState == 4 && delete_user.status == 200){
            getDatafromServer5()
        }
    }

    delete_user.open("DELETE",api_url+employee[indexglobal].id)
    delete_user.send()

    // displayuser()

}