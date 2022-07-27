function cleartable() {
    document.getElementById("id").value = ""
    document.getElementById("email").value = ""
    document.getElementById("username").value = ""
    document.getElementById("Password").value = ""

}
function displayusers() {
    document.querySelector("tbody").innerHTML = ""
    for (i = 0; i < ajay.length; i++) {
        var tr = document.createElement("tr");
        for (a in ajay[i]) {
            var td1 = document.createElement("td");
            td1.innerHTML = ajay[i][a];
            tr.appendChild(td1);
        }
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("onclick","edituser("+i+")")
        editBtn.setAttribute("class","btn btn-warning ")
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick","deleteuser("+i+")")
        deleteBtn.setAttribute("class","btn btn-danger")
        deleteBtn.innerHTML = "delete"
        deleteTd.appendChild(deleteBtn)

        tr.appendChild(editTd)
        tr.appendChild(deleteTd)
        document.querySelector("tbody").appendChild(tr);
    }
}
displayusers()