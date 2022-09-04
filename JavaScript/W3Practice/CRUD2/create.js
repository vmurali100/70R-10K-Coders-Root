var Users=[];



function addUser(){
    var user={
        id:document.getElementById("id").value,
        email:document.getElementById("email").value,
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,
    }
    Users.push(user);
    displayUser();
    clearForm();
}
function clearForm(){
    document.getElementById("id").value="";
    document.getElementById("email").value="";
    document.getElementById("username").value="";
    document.getElementById("password").value="";
}
