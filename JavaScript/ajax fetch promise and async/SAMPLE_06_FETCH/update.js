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

    var update_url = api_url + one[globalindex].id

    fetch(update_url,{
        method:"PUT",
        body:JSON.stringify(temp),
        headers : {"Content-Type":"application/json"}
    })
    .then(res=>getDatafromServer())

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