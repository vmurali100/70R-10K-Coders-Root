var ind = null //global index 

function edituser(index){

    ind = index // storing index in global variable for use outside this function
   
    document.getElementById("id").value = user[ind].id
    document.getElementById("fname").value=user[ind] .fname
    document.getElementById("lname").value=user[ind].lname
    document.getElementById("mobile").value=user[ind] .mobile
    document.getElementById("city").value=user[ind] .city
    swapbuttons(true)
}

function updateuser(){

        user[ind].id = document.getElementById("id").value,
        user[ind].fname = document.getElementById("fname").value,
        user[ind] .lname= document.getElementById("lname").value,
        user[ind].mobile=document.getElementById("mobile").value,
        user[ind].city = document.getElementById("city").value
    
    
        var api_url = "http://localhost:3000/user/"

        var update_user = new XMLHttpRequest();
    
        update_user.onreadystatechange = function () {
            if (update_user.readyState == 4 && update_user.status == 200) {
                console.log("user updated successfully")
                getDatafromServer2()
    
            }
        }
        update_user.open("PUT", api_url+user[ind].id,user[ind]) ;
        update_user.setRequestHeader("Content-Type", "application/json")
        update_user.send(JSON.stringify(user[ind]))
}

function swapbuttons(value){
    if (value == true){
        document.getElementById("updateBtn").style.display="block";
        document.getElementById("addBtn").style.display="none";
     }
     else {
        document.getElementById("updateBtn").style.display="none";
        document.getElementById("addBtn").style.display="block";
     }

    }
