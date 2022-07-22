var idx=null //global index 

function edituser(index){

    idx = index // storing index in global variable for use outside this function
   
    document.getElementById("id").value=users[idx] .id
    document.getElementById("email").value=users[idx].email
    document.getElementById("username").value=users[idx] .username
    document.getElementById("password").value=users[idx] .password
    swapbuttons(true)
}

function updateuser(){
    
        users[idx].id = document.getElementById("id").value
        users[idx] .email= document.getElementById("email").value,
        users[idx].username=document.getElementById("username").value,
        users[idx].password = document.getElementById("password").value
    
    displayuser();
    clearform();
    swapbuttons(false);

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
