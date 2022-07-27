var globalIndex =null 

function edituser(index){

    globalIndex = index;
    
    document.getElementById("id").value=users[index] .id
    document.getElementById("email").value=users[index].email
    document.getElementById("username").value=users[index] .username
    document.getElementById("password").value=users[index] .password
    swapbuttons(true)
}

var globalIndex = null;

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

function updateuser(){

    var users = {
    
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        
    };

    
    displayUsers();
    clearform();
    swapbuttons(false)

}


    