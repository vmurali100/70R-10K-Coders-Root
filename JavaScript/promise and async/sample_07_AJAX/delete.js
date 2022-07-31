
function deleteuser(globalindex) {
   
       
    var api_url = "http://localhost:3000/one/"
    var delete_user = new XMLHttpRequest()

    delete_user.onreadystatechange = function () {
        if (delete_user.readyState == 4 && delete_user.status == 200) {
            getDatafromServer()
        }
    }
    delete_user.open("DELETE", api_url + one[globalindex].id)
    delete_user.send()
}

