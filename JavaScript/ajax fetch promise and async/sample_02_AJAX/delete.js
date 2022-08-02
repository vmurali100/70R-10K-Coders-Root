function deleteuser(i){

    var api_url = "http://localhost:3000/comments/"

    var deluser = new XMLHttpRequest()

    deluser.onreadystatechange = function(){
        if(deluser.readyState == 4 && deluser.status == 200){
            getDatafromServer()
        }
    }
    deluser.open("DELETE",api_url+comments[i].id)
    deluser.send()

}