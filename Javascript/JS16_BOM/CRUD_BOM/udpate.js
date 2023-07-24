var api_url = "http://localhost:3000/users/";
var users = []
function getUserIndex() {
  var url = window.location.href;
  var userIndex = Number(url.substring(url.lastIndexOf("?") + 1));
  // users=JSON.parse(localStorage.getItem("users"))
  users=JSON.parse(sessionStorage.getItem("users"))
  var editUser = users.find((myUser)=>myUser.id == userIndex)
  // fetch(api_url+userIndex).then((data)=> data.json()).then((response)=>{
  //   console.log(response)
  //   for(a in response){
  //     document.getElementById(a).value = response[a]
  //   }
  // })
   for(a in editUser){
      document.getElementById(a).value = editUser[a]
    }

}

getUserIndex();
function updateUser() {
  var user = {
    id: document.getElementById("id").value,
    email: document.getElementById("email").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  var updateUser = new XMLHttpRequest();
  updateUser.onreadystatechange = function () {
    if (updateUser.readyState == 4 && updateUser.status == 200) {
      window.location.href = "users.html"
    }
  };
  updateUser.open("PUT", api_url + user.id);
  updateUser.setRequestHeader("Content-Type", "application/json");
  updateUser.send(JSON.stringify(user));
}
