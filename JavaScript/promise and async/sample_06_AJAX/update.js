var globalindex = null

function edituser(index){

    globalindex =  index

    document.getElementById("id").value = one[index].id 
    document.getElementById("fname").value = one[index].fname
    document.getElementById("lname").value = one[index].lname

    swapbbuttons(true)
}


function updateuser(index){

    
   
    temp = {
    id : document.getElementById("id").value,
    fname : document.getElementById("fname").value,
    lname : document.getElementById("lname").value
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

    swapbbuttons(false)
}

function swapbbuttons(value){
    if(value==true){
        document.getElementById("addBtn").style.display="none"
        document.getElementById("updateBtn").style.display="block"
    }
    else{
        document.getElementById("addBtn").style.display="block"
        document.getElementById("addBtn").style.display="none"
    }
}