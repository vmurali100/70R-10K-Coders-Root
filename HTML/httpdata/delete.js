var user = [];
function data2() {
    var api_url = "http://localhost:3000/user";
    var data3 = new XMLHttpRequest();
    data3.onreadystatechange = function () {
        if (data3.readyState == 4 && data3.status == 200) {
            console.log(data3.response);
            user = JSON.parse(data3.response);
            console.log(user)
            users();
        }
    };
    data3.open("GET", api_url);
    data3.send();
}
data2();
function deleteUser(i) {
    var api_url = "http://localhost:3000/user/";
    var deleteUser = new XMLHttpRequest();
    deleteUser.onreadystatechange = function () {
        if (deleteUser.onreadystatechange == 4 && deleteUser.status == 200) {
            console.log("User Deleted");
            data2();
        }
    }
    deleteUser.open("DELETE", api_url + user[i].id);
    deleteUser.send();
}
function updateuser() {
    var universe = {
        id: document.getElementById("id").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        zip: document.getElementById("zip").value
    };
    var api_url = "http://localhost:3000/user/";
    var updateuser = new XMLHttpRequest();
    updateuser.onreadystatechange = function () {
        if (updateuser.onreadystatechange == 4 && updateuser.status == 200) {
            data2();
        }
    }
    updateuser.open("PUT", api_url + user[globalindex].id);
    updateuser.setRequestHeader("content-Type", "application/json");
    updateuser.send(JSON.stringify(universe));
}
function adduser() {
    var universe = {
        id: document.getElementById("id").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        zip: document.getElementById("zip").value
    };
    var api_url = "http://localhost:3000/user/";
    var adduser = new XMLHttpRequest();
    adduser.onreadystatechange = function () {
        if (adduser.onreadystatechange == 4 && adduser.status == 200) {
        }
    }
    adduser.open("POST", api_url);
    adduser.setRequestHeader("content-Type", "application/json");
    adduser.send(JSON.stringify(universe));
}