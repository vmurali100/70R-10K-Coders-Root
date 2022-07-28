
function edituser(index){

    globalIndex = index;
    
    document.getElementById("id").value=users[index] .id
    document.getElementById("email").value=users[index].email
    document.getElementById("username").value=users[index] .username
    document.getElementById("password").value=users[index] .password
    swapbuttons(true)
}

var globalIndex = null;


function updateuser(){

    var user = {
    
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        
    };
    

    var api_url="http://localhost:3000/users"
    var updateuser = new XMLHttpRequest();
    updateuser.onreadystatechange = function () {
        if (updateuser.readyState == 4 && updateuser.status==200){
            getDataFromServer()
        }
    }
    updateuser.open("put",api_url+users[globalIndex].id,users[globalIndex]);
    updateuser.setRequestHeader("Content-Type","application/json")

    updateuser.send(JSON.stringify(user))


    

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



    