var users=[];
var url = "http://localhost:3200/posts/";

function getDataFromServer(){
    var getData = new XMLHttpRequest();
    var url = 'http://localhost:3200/posts';
    getData.onreadystatechange = function (){
        if (getData.readyState == 4 && getData.status == 200){
            var result = getData.response;
            console.log(result)
            localStorage.setItem('Users',result)
            users = JSON.parse(result);
            displayUsers(users);
       }
    }
    getData.open("GET",url);
    getData.send();
}
getDataFromServer()

function addUser(){
    var user={
        userId:document.getElementById("userId").value,
        id:document.getElementById("id").value,
        title:document.getElementById("title").value,
        body:document.getElementById("body").value,
    }

    
    var createUser = new XMLHttpRequest();
    createUser.onreadystatechange = function(){
        if(createUser.readyState == 4 && createUser.status == 201){
            console.log("User Posted");
            location.href="users.html"
        }
    }
    createUser.open('POST',url);
    createUser.setRequestHeader('Content-Type','application/json')
    createUser.send(JSON.stringify(user))
}

function displayUsers(){
    document.querySelector('tbody').innerHTML='';
    users.forEach((user,i)=>{
        var Tr = document.createElement('tr');
        document.querySelector('tbody').appendChild(Tr);
        for (a  in user){
            var Td = document.createElement('td');
            Tr.appendChild(Td);
            Td.innerHTML = user[a];
        }

        var editTd = document.createElement("td");
        var editBtn = document.createElement('button');
        editBtn.setAttribute("onclick","editUser("+user.id+")")
        editTd.appendChild(editBtn);
        editBtn.innerHTML='Edit';
        Tr.appendChild(editTd)

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('onclick',"deleteUser("+user.id+")");
        deleteTd.appendChild(deleteBtn);
        deleteBtn.innerHTML='Delete';
        Tr.appendChild(deleteTd)
    })
}

function deleteUser(index){
    var deleteUser = new XMLHttpRequest();
    deleteUser.onreadystatechange = function(){
        if(deleteUser.readyState == 4 && deleteUser.status == 200){
            console.log('user deleted');
            getDataFromServer()
        }
    }
    deleteUser.open('DELETE',url+index);
    deleteUser.send();
    console.log(index)
}

function editUser(ind){
    window.location.href="index.html?"+ind;
}

function getUserIndex(){
    let url = location.href;
    let userIndex = Number(url.substring(url.lastIndexOf("?")+1));
    console.log(userIndex);
    users = JSON.parse(localStorage.getItem("users"));
    var editUser  = users
}