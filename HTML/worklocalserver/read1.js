var user = [];
function users() {
    document.querySelector("#open").style.display="block";
    document.querySelector("tbody").innerHTML="";
    for (i = 0; i < user.length; i++) {
        var user1 = document.createElement("tr");
        document.querySelector("tbody").appendChild(user1);
        for (a in user[i]) {
            var user2 = document.createElement("td");
            user1.appendChild(user2);
            user2.innerHTML = user[i][a];
        }
        var user3=document.createElement("td");
        var user4=document.createElement("Button");
        user4.innerHTML="EDIT"
        user3.appendChild(user4);
        user4.setAttribute("onclick","edituser("+i+")");
        user4.setAttribute("class","btn btn-warning");
        user1.appendChild(user3);
        var user5=document.createElement("td");
        var user6=document.createElement("Button");
        user6.setAttribute("onclick","deleteuser("+i+")");
        user6.innerHTML="DELETE";
        user6.setAttribute("class","btn btn-danger");
        user5.appendChild(user6);
        user1.appendChild(user5);
    }
}
function cleartable() {
    var user4 = {
        fname: document.getElementById("fname").value="",
        lname: document.getElementById("lname").value="",
        tel: document.getElementById("tel").value="",
        address: document.getElementById("address").value="",
        state: document.getElementById("state").value="",
        city: document.getElementById("city").value="",
        zip: document.getElementById("zip").value=""
    }
};
function datauser() {
    var user3 = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        zip: document.getElementById("zip").value,
    };
    user.push(user3);
    users();
    cleartable();
}