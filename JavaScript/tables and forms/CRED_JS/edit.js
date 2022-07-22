var idx=null //global index 

function edituser(index){
    idx = index
    var newUser = users[idx] // stores values of index in newUser variable
    document.getElementById("id").value=newUser.id
    document.getElementById("email").value=newUser.email
    document.getElementById("username").value=newUser.username
    document.getElementById("password").value=newUser.password
    swapbuttons(true)
}

function updateuser(){
    var upuser = {
        id:document.getElementById("id").value,
        email: document.getElementById("email").value,
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }
    users[idx]=upuser //stores values in upuser in users[globalindex]
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
