function clearTable() {
    fname: document.getElementById("FirstName").value = " "
    lname: document.getElementById("LastName").value = " "
    tel: document.getElementById("Telephone").value = " "
    city: document.getElementById("City").value = " "

}

function displayUsers() {
    document.querySelector("tbody").innerHTML = "";

    for (i = 0; i < users.length; i++)
        var myTr = document.createElement("tr")


    for (a in users[i]) {
        var td1 = document.createElement("td");
        td1.innerHTML = users[i][a];
        myTr.appendChild(td1);

    }


    var editTd = document.createElement("td") // for creating edit td
    var editBtn = document.createElement("button") // for creating buttons
    editBtn.setAttribute("class", "btn btn-warning")
    editBtn.setAttribute("onclick", "editUser(" + i + ")")
    editBtn.innerHTML = "Edit" // to enter edit text in row
    editTd.appendChild(editBtn) //to displayeditbutton



    var deleteTd = document.createElement("td")
    var deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("onclick", "deleteUsers(" + i + ")")
    deleteBtn.setAttribute("class", "btn btn-danger")
    deleteBtn.innerHTML = "Delete"
    deleteTd.appendChild(deleteBtn)




    myTr.appendChild(editTd)
    myTr.appendChild(deleteTd)

    document.querySelector("tbody").appendChild(myTr)





}
displayUsers();