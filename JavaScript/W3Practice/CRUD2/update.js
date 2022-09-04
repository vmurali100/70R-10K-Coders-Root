var globalIndex=null;
function swapButtons(value){
 if(value == true){
    document.getElementById("updateBtn").style.display="block";
    document.getElementById("addBtn").style.display="none";
 }else{
    document.getElementById("updateBtn").style.display="none";
    document.getElementById("addBtn").style.display="block";
 }
}
function updateUser(){
    var updtUser={
        id:document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }
    Users[globalIndex]=updtUser;
    displayUser();
    clearForm();
    swapButtons(false);
}
function editUser(index){
    globalIndex=index;
    var newUser=Users[index];
    document.getElementById("id").value = newUser.id;
    document.getElementById("email").value = newUser.email;
    document.getElementById("username").value = newUser.username;
    document.getElementById("password").value = newUser.password;;
    swapButtons(true);
}