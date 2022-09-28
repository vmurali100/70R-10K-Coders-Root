var users = [];
function user1() {
    document.querySelector("tbody").innerHTML = ""
    for (i = 0; i < users.length; i++) {
        var users1 = document.createElement("tr");
        document.querySelector("tbody").appendChild(users1);
        // users1.setAttribute("onclick", "deleteuser(" + i + ")");
        for (a in users[i]) {
            var users2 = document.createElement("td");
            users1.appendChild(users2);
            users2.innerHTML = users[i][a];
        }
        var edittd = document.createElement("td");
        var editbutton = document.createElement("button");
        editbutton.setAttribute("onclick","edituser("+i+")");
        editbutton.innerHTML = "EDIT";
        editbutton.setAttribute("class","btn btn-warning");
        edittd.appendChild(editbutton);
        users1.appendChild(edittd);
        var deletetd = document.createElement("td");
        var deletebutton = document.createElement("button");
        deletebutton.setAttribute("onclick","deleteuser("+i+")");
        deletebutton.innerHTML = "DELETE";
        deletebutton.setAttribute("class","btn btn-danger");
        deletetd.appendChild(deletebutton);
        users1.appendChild(deletetd);
    }
}
function cleartable() {
    var clearuser = {
        fname: document.getElementById("inputfname").value = "",
        lname: document.getElementById("inputlname").value = "",
        tel: document.getElementById("inputtel").value = "",
        address: document.getElementById("inputaddress").value = "",
        city: document.getElementById("inputcity").value = "",
        state: document.getElementById("inputstate").value = "",
        zip: document.getElementById("inputzip").value = "",
    }
}