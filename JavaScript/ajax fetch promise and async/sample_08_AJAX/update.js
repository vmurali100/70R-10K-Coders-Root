var globalindex = null

function edituser(index){

    globalindex =  index

    document.getElementById("id").value = one[index].id 
    document.getElementById("email").value = one[index].email
    document.getElementById("username").value = one[index].username
    document.getElementById("password").value = one[index].password
     swapbuttons(true)
}


function updateuser(index){

    
   
    temp = {
    id : document.getElementById("id").value,
    email : document.getElementById("email").value,
    username : document.getElementById("username").value,
    password : document.getElementById("password").value,
    
    }

    var api_url ="http://localhost:3000/one/"

    var update_user = new XMLHttpRequest();

    update_user.onreadystatechange=function(){
        if(update_user.readyState==4 && update_user.status==200){
            getDatafromServer()
        }
    }
    update_user.open("PUT",api_url+one[globalindex].id,temp)
    update_user.setRequestHeader("Content-Type","application/json")
    update_user.send(JSON.stringify(temp))

    swapbuttons(false)
}

function swapbuttons(value){
    if(value==true){
        document.getElementById("addBtn").style.display="none"
        document.getElementById("updateBtn").style.display="block"
    }
    else{
        document.getElementById("addBtn").style.display="block"
        document.getElementById("addBtn").style.display="none"
    }
}