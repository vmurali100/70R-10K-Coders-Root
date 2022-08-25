function editUser(index) {
    globalindex = index;
    var newUser = users[index];
    document.getElementById("userId").value = newUser.userId;
    document.getElementById("id").value = newUser.id;
    document.getElementById("title").value = newUser.title;
    document.getElementById("body").value = newUser.body;
    swapButtons(true)
  }

  var globalindex = null;
 
  function swapButtons(value){
    console.log(value)
    if(value == true){
        document.getElementById("updateBtn").style.display="block"
        document.getElementById("addBtn").style.display="none"
    }else{
        document.getElementById("updateBtn").style.display="none"
        document.getElementById("addBtn").style.display="block"
    }
  }

  function updateUser() {
    var user = {
      userId: document.getElementById("userId").value,
      id: document.getElementById("id").value,
      title: document.getElementById("title").value,
      body: document.getElementById("body").value,
    };
    
    var api_url="http://localhost:3000/users/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function(){
        if(updateUser.readyState == 4 && updateUser.status == 200){
    
            getDataFromServer()
        }

    }
    updateUser.open("PUT",api_url+users[globalindex].id);
    updateUser.setRequestHeader("content-Type","application/json")
    updateUser.send(JSON.stringify(user))
}
    //displayUsers();
    //clearTable();
    //swapButtons(false)
  