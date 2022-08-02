function adduser(){

    temp = {
        id:document.getElementById("id").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        tel:document.getElementById("tel").value,
        address:document.getElementById("address").value,
        city:document.getElementById("city").value,
        state:document.getElementById("state").value,
        zip:document.getElementById("zip").value,
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