function deleteuser(){
    var api_url = "http://localhost:3000/items/"

    console.log(selectedItem)

    console.log(api_url+selectedItem.id)

    var delete_user = new XMLHttpRequest()

    delete_user.onreadystatechange = function(){
        if(delete_user.readyState==4 && delete_user.status==200){
            getDatafromServer()
        }
    }
    delete_user.open("DELETE",api_url+selectedItem.id)
    delete_user.send()

}