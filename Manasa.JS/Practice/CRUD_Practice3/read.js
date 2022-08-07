function clearTable() {
    id: document.getElementById("id").value = " "
    email: document.getElementById("email").value = " "
    username: document.getElementById("username").value = " "
    password: document.getElementById("password").value = " "
}

function displayUsers() {
    document.querySelector("tbody").innerHTML = "";
    for (i = 0; i < users.length; i++) {
        var myTr = document.createElement("tr") // to represents rows
            // myTr.setattribute("onclick", "deleteUser (" + i + ")")

        for (a in users[i]) {
            var td1 = document.createElement("td"); // to represents documents
            td1.innerHTML = users[i][a]; // to write text
            myTr.appendChild(td1);
        }

        var editTd = document.createElement("td") // for creating edit td
        var editBtn = document.createElement("button") // for creating buttons
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.setAttribute("onclick", "editUser(" + i + ")")
        editBtn.innerHTML = "Edit" // to enter edit text in row
        editTd.appendChild(editBtn) //to displayeditbutton



        var deleteTd = document.createElement("td") // for creating del td
        var deleteBtn = document.createElement("button") // for creating buttons
        deleteBtn.setAttribute("onclick", "deleteUsers(" + i + ")")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.innerHTML = "Delete" // to enter edit text in row
        deleteTd.appendChild(deleteBtn) //to displayeditbutton

        myTr.appendChild(editTd)
        myTr.appendChild(deleteTd)


        document.querySelector("tbody").appendChild(myTr); //to display total body

    }

}
displayUsers();
Footer