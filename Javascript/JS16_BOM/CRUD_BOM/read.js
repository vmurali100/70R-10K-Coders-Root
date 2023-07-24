var users = []
function getDataFromServer(){
    // var api_url = "http://filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
    var api_url = "http://localhost:3000/users"
    var getData = new XMLHttpRequest();

    getData.onreadystatechange = function (){
        if(getData.readyState == 4 && getData.status == 200){
            console.log(getData.response)
            // To convert a STRING as Object
            // localStorage.setItem("users",getData.response)
            sessionStorage.setItem("users",getData.response)
            users = JSON.parse(getData.response);
            console.log(users)
            displayUsers()
        }
    }

    getData.open("GET",api_url);
    getData.send()
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
      editBtn.setAttribute("onclick","editUser("+users[i].id+")")

      editBtn.innerHTML="Edit"
      editTd.appendChild(editBtn)

      var deleteTd = document.createElement("td");
      var deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("onclick","deleteUser("+users[i].id+")")
      deleteBtn.setAttribute("type","button")
      deleteBtn.setAttribute("class","btn btn-danger")
      deleteBtn.innerHTML="Delete"
      deleteTd.appendChild(deleteBtn)

      myTr.appendChild(editTd)

      myTr.appendChild(deleteTd)

      document.querySelector("tbody").appendChild(myTr);
    }
  }

  getDataFromServer()

  function editUser(index) {
    // globalIndex = index;
    // var newUser = users[index];
    // document.getElementById("id").value = newUser.id;
    // document.getElementById("email").value = newUser.email;
    // document.getElementById("username").value = newUser.username;
    // document.getElementById("password").value = newUser.password;
    // swapButtons(true)
    window.location.href = "edit.html?"+index
  }