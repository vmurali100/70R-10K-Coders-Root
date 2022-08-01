function clearform() {

    document.getElementById("fname").value = " "
    document.getElementById("lname").value = " "
    document.getElementById("tel").value = " "
    document.getElementById("address").value = " "
    document.getElementById("city").value = " "
    document.getElementById("state").value = " "
    document.getElementById("zip").value = " "
}

function displayUsers() {

    document.querySelector("tbody").innerHTML = ""

    for (i = 0; i < users.length; i++) {
        var myTr = document.createElement("tr")
        document.querySelector("tbody").appendChild(myTr)

        for (a in users[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = users[i][a];
            myTr.appendChild(td1)
        }


        var edittd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("onclick", "edituser(" + i + ")")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.innerHTML = "edit"
        edittd.appendChild(editBtn)



        var deletetd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")")
        deletetd.appendChild(deleteBtn)

        myTr.appendChild(edittd)
        myTr.appendChild(deletetd)

        document.querySelector("tbody").appendChild(myTr);

    }
}






displayUsers()