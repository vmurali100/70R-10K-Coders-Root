var api_url = "http://localhost:3000/nestedUsers/";
var singleElement = document.querySelector("#singleUser");
var selectedUser = {};
var nestedUsers = [];
async function getNestedUsers() {
  var response = await fetch(api_url);
  nestedUsers = await response.json();
  console.log(nestedUsers);
  displayUsers();
}

getNestedUsers();

function displayUsers() {
  var selectElement = document.querySelector("select");
  nestedUsers.forEach((user, i) => {
    var opt = document.createElement("option");
    opt.innerHTML = user.username;
    selectElement.appendChild(opt);
  });
}

function displaySingleUser() {
  var sValue = document.querySelector("select").value;
  selectedUser = nestedUsers.find((user) => user.username == sValue);
  singleElement.style.display = "block";
  singleElement.innerHTML = JSON.stringify(selectedUser);

  var editBtn = document.createElement("button");
  editBtn.setAttribute("class", "btn btn-warning");
  editBtn.setAttribute("onclick", "editUser()");
  editBtn.setAttribute("type", "button");
  editBtn.innerHTML = "Edit";
  singleElement.appendChild(editBtn);

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "btn btn-danger");
  deleteBtn.setAttribute("onclick", "deleteUser()");

  deleteBtn.innerHTML = "Delete";
  singleElement.appendChild(deleteBtn);
}
