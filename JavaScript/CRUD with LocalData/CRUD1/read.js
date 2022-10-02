
function displayUsers(){
    for(i=0;i<users.length;i++){
        var myTr = document.createElement('tr');
        document.querySelector('tbody').appendChild(myTr)
        for(a in users[i]){
            var myTd = document.createElement('td');
            myTr.appendChild(myTd)
            myTd.innerHTML = users[i][a]
        }
        var editTd = document.createElement('td');
        var editbtn = document.createElement("button");
        editbtn.setAttribute("class", "btn btn-info");
        editbtn.setAttribute("onclick","editUser("+i+")");
        editbtn.innerHTML = "Edit";
        editTd.appendChild(editbtn);
        myTr.appendChild(editTd);

        var deleteTd = document.createElement("td");
        var deletebtn = document.createElement("button");
        deletebtn.setAttribute("class", "btn btn-danger");
        deletebtn.setAttribute("onclick","deleteUser("+i+")")
        deletebtn.innerHTML = "Delete";
        deleteTd.appendChild(deletebtn);
        myTr.appendChild(deleteTd);
    
    }
}
displayUsers()