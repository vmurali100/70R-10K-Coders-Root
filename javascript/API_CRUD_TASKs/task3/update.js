

function edituser(index) {
  globalindex = index;
  var newUser = users[index];
  document.getElementById("fname").value = newUser.fname;
  document.getElementById("lname").value = newUser.lname;
  document.getElementById("tel").value = newUser.tel;
  document.getElementById("address").value = newUser.address;
  document.getElementById("city").value = newUser.city;
  document.getElementById("state").value = newUser.state;
  document.getElementById("zip").value = newUser.zip;
  
  swapButtons(true)
}

var globalindex = null;
function swapButtons(value) {
  console.log(value)
  if (value == true) {
    document.getElementById("updateBtn").style.display = "block"
    document.getElementById("addBtn").style.display = "none"
  } else {
    document.getElementById("updateBtn").style.display = "none"
    document.getElementById("addBtn").style.display = "block"
  }
}

function updateuser() {
  var user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    tel: document.getElementById("tel").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    zip: document.getElementById("zip").value,
  };
    
  var apiurl="http://localhost:3000/users/"
  var updateuser = new XMLHttpRequest();
  updateuser.onreadystatechange = function () {
    if (updateuser.readyState == 4 && updateuser.status == 200) {

      getDataFromServer()
    }

  }
  updateuser.open("PUT", apiurl + users[globalindex].id);
  updateuser.setRequestHeader("content-Type", "application/json")
  updateuser.send(JSON.stringify(user))
}
    //displayUsers();
    //clearTable();
    //swapButtons(false)
