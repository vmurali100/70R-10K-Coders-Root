function displayUser(){
    document.querySelector("tbody").innerHTML="";
    for(i=0;i<Users.length;i++){
        
        var myTr = document.createElement("tr");
        document.querySelector("tbody").appendChild(myTr);
      
            for(x in Users[i]){
                var myTd = document.createElement("td");
                    myTr.appendChild(myTd);
                    myTd.innerHTML = Users[i][x];
            }
            var editBtn = document.createElement("button");
            var editTd = document.createElement("td");
            editBtn.setAttribute("onclick","editUser("+i+")");
            editTd.appendChild(editBtn);
            editBtn.innerHTML = "Edit";
            myTr.appendChild(editTd);


            var deleteBtn = document.createElement("button");
            var deleteTd = document.createElement("td");
            deleteTd.appendChild(deleteBtn);
            deleteBtn.innerHTML = "Delete";
            deleteBtn.setAttribute("onclick","deleteUser("+i+")");
            myTr.appendChild(deleteTd);
    }
    
    }
    // displayUser();