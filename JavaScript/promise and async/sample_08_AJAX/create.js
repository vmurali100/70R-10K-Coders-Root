
function adduser(){

    temp = {
        id:document.getElementById("id").value,
        email:document.getElementById("email").value,
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,
       
    }

    var api_url = "http://localhost:3000/one/"

    var add_user = new XMLHttpRequest()

    add_user.onreadystatechange=function(){
        if(add_user.readyState==4 && add_user.status==200){
            getDatafromServer()
        }
    }
    add_user.open("POST",api_url)
    add_user.setRequestHeader("Content-Type","application/json")
    add_user.send(JSON.stringify(temp))

}