
var globalIndex = null;

function editUser(index) {
    globalIndex = index;
    var newUser = names[index];
    document.getElementById("fname").value = newUser.fname;
    document.getElementById("lname").value = newUser.lname;
   
    swapButtons(true)
  }

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
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
     
    };
    
    var api_url=" http://localhost:3000/names/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function(){
        if(updateUser.readyState == 4 && updateUser.status == 200){
    
            getDataFromServer()
        }

    }
    updateUser.open("PUT",api_url+names[globalIndex].id);
    updateUser.setRequestHeader("content-Type","application/json")
    updateUser.send(JSON.stringify(user))
}
    //displayUsers();
    //clearTable();
    //swapButtons(false)
  