function clearTable(){
    document.getElementById("id").value=""
    document.getElementById("email").value=""
    document.getElementById("username").value=""
    document.getElementById("password").value=""
  }
  function displayUsers() {
    document.querySelector("tbody").innerHTML = "";
    for (i = 0; i < users.length; i++) {
      var myTr = document.createElement("tr");
      for (a in users[i]) {
        var td1 = document.createElement("td");
        td1.innerHTML = users[i][a];
        myTr.appendChild(td1);
      }

      var editTd = document.createElement("td");
      var editBtn = document.createElement("button");
      editBtn.setAttribute("class","btn btn-warning")
      editBtn.setAttribute("onclick","editUser("+i+")")

      editBtn.innerHTML="Edit"
      editTd.appendChild(editBtn)

      var deleteTd = document.createElement("td");
      var deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("onclick","deleteUser("+i+")")
      deleteBtn.setAttribute("class","btn btn-danger")
      deleteBtn.innerHTML="Delete"
      deleteTd.appendChild(deleteBtn)

      myTr.appendChild(editTd)

      myTr.appendChild(deleteTd)

      document.querySelector("tbody").appendChild(myTr);
    }
  }
  displayUsers();