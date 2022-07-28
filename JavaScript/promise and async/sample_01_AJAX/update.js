var gloind = null;

function edituser(index) {

    gloind = index;
    

    document.getElementById("id").value = posts[index].id
    document.getElementById("title").value = posts[index].title
    document.getElementById("body").value = posts[index].body
    

    swapbuttons(true)

}

function updateuser() {

    temp = {

    id : document.getElementById("id").value,
    title : document.getElementById("title").value,
    body : document.getElementById("body").value
   
       };

   

    api_url = "http://localhost:3000/posts/"

    var update_user = new XMLHttpRequest()

    update_user.onreadystatechange = function(){

        if(update_user.readyState == 4 && update_user.status==200){

            console.log("user updated successfully")

            getDatafromServer();
          

        
    } 
}
update_user.open("PUT",api_url+posts[gloind].id,temp)
update_user.setRequestHeader("Content-Type","application/json")
update_user.send(JSON.stringify(temp))


    swapbuttons(false)
    clearform()

}

function clearform() {
    // document.getElementById("userId").value = ""
    document.getElementById("id").value = ""
    document.getElementById("title").value = ""
    document.getElementById("body").value = ""
  
}


function swapbuttons(value) {

    if (value == true) {
        document.getElementById("addBtn").style.display = "none"
        document.getElementById("updateBtn").style.display = "block"
    }
    else {
        document.getElementById("addBtn").style.display = "block"
        document.getElementById("updateBtn").style.display = "none"
    }
}
