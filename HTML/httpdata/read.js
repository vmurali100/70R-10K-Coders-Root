function users() {
    document.querySelector("tbody").innerHTML = "";
    for (i = 0; i < user.length; i++) {
        var user1 = document.createElement("tr");
        document.querySelector("tbody").appendChild(user1);
        for (a in user[i]) {
            var user2 = document.createElement("td");
            user1.appendChild(user2);
            user2.innerHTML = user[i][a];
        }
        var user3 = document.createElement("td");
        var user4 = document.createElement("Button");
        user4.innerHTML = "EDIT"
        user3.appendChild(user4);
        user4.setAttribute("onclick", "edituser(" + i + ")");
        user4.setAttribute("class", "btn btn-warning");
        user1.appendChild(user3);
        var user5 = document.createElement("td");
        var user6 = document.createElement("Button");
        user6.setAttribute("onclick", "deleteUser(" + i + ")");
        user6.setAttribute("type", "button");
        user6.innerHTML = "DELETE";
        user6.setAttribute("class", "btn btn-danger");
        user5.appendChild(user6);
        user1.appendChild(user5);
    }
}
// function cleartable() {
//     var user4 = {
//         id: document.getElementById("id").value = "",
//         fname: document.getElementById("fname").value = "",
//         lname: document.getElementById("lname").value = "",
//         tel: document.getElementById("tel").value = "",
//         address: document.getElementById("address").value = "",
//         state: document.getElementById("state").value = "",
//         city: document.getElementById("city").value = "",
//         zip: document.getElementById("zip").value = ""
//     }
// };
// function datauser() {
//     var user3 = {
//         id: document.getElementById("id").value,
//         fname: document.getElementById("fname").value,
//         lname: document.getElementById("lname").value,
//         tel: document.getElementById("tel").value,
//         address: document.getElementById("address").value,
//         state: document.getElementById("state").value,
//         city: document.getElementById("city").value,
//         zip: document.getElementById("zip").value,
//     };
//     user.push(user3);
//     users();
//     cleartable();
// }
function swapButtons(value) {
    if (value === true) {
        document.getElementById("sign").style.display = "none";
        document.getElementById("update").style.display = "block";
    }
    else {
        document.getElementById("sign").style.display = "block";
        document.getElementById("update").style.display = "none";
    }
};
var globalindex = null;
function edituser(index) {
    globalindex = index;
    var newedit = user[index];
    document.getElementById("id").value = newedit.id;
    document.getElementById("fname").value = newedit.fname;
    document.getElementById("lname").value = newedit.lname;
    document.getElementById("tel").value = newedit.tel;
    document.getElementById("address").value = newedit.address;
    document.getElementById("state").value = newedit.state;
    document.getElementById("city").value = newedit.city;
    document.getElementById("zip").value = newedit.zip;
    swapButtons(true);
}
// function updateuser() {
//     var universe = {
//         id: document.getElementById("id").value,
//         fname: document.getElementById("fname").value,
//         lname: document.getElementById("lname").value,
//         tel: document.getElementById("tel").value,
//         address: document.getElementById("address").value,
//         state: document.getElementById("state").value,
//         city: document.getElementById("city").value,
//         zip: document.getElementById("zip").value
//     }
//     user[globalindex] = universe;
//     users();
//     swapButtons(false);
// }