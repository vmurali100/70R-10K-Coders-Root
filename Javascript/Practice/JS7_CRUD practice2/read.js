function clearTable() {
    document.getElementById("id").value = ""
    document.getElementById("email").value = ""
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""

}

function displayUsers() {
    document.querySelector("tbody").innerHTML = ""

    for (i = 0; i < Users.length; i++) {
        var myTr = document.createElement("tr")
        document.querySelector("tbody").appendChild(myTr)



        for (a in Users[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = Users[i][a];
            myTr.appendChild(td1);

        }

        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)
        editBtn.setAttribute("onclick", "editUser(" + i + ")")
        myTr.appendChild(editTd)



        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.innerHTML = "Delete"
        deleteTd.appendChild(deleteBtn)
        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")")
        myTr.appendChild(deleteTd)


    }
}

displayUsers()