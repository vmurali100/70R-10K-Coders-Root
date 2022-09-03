var api_url=" http://localhost:3000/nestedusers/";
var nestedUsers=[];
var selectedUser = {};
var selectedElement;

async function getnestedUsers(){
    var response = await fetch(api_url);
    nestedUsers = await response.json();
    console.log(nestedUsers);
    displayUsers()
}
getnestedUsers();

function displaySingleUser(){
    selectedElement = document.getElementById("singleUser");
    var sValue = document.querySelector("#select").value;
    var selectedUser = nestedUsers.find((user)=>user.username == sValue);
    selectedElement.innerHTML = JSON.stringify(selectedUser);

    var editbtn = document.createElement("button");
    editbtn.setAttribute("onclick","editUser()");
    editbtn.setAttribute("type","button")
    editbtn.innerHTML = "Edit";
    selectedElement.appendChild(editbtn);

    var deletebtn = document.createElement("button");
    deletebtn.setAttribute("onclick","deleteUser()")
    deletebtn.setAttribute("type","button")
    deletebtn.innerHTML = "Delete";
    selectedElement.appendChild(deletebtn);
}

function displayUsers(){
    nestedUsers.forEach((user,i)=>{
        var opt=document.createElement("option");
        opt.innerHTML=user.username;
        document.querySelector("#select").appendChild(opt);
    })
}