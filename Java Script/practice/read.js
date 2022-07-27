var users = [ {
    "id": 17,
    "email": "SBillanti@risus.gov",
    "username": "SPento",
    "password": "i6gWr"
},
{
    "id": 18,
    "email": "FSzymanski@aliquam.com",
    "username": "AValkanet",
    "password": "U1ddq"
},
{
    "id": 19,
    "email": "CFrets@scelerisque.net",
    "username": "CFrutos",
    "password": "Va16n"
}]
function cleartable() {
    document.getElementById('id').value = ""
    document.getElementById('email').value = ""
    document.getElementById('username').value = ""
    document.getElementById('password').value = ""


}
function displayusers() {
    document.querySelector('tbody').innerHTML = "";
    for (i = 0; i < users.length; i++) {
        var myTr = document.createElement('tr')

        for (a in users[i]) {
            var td1 = document.createElement('td')
            td1.innerHTML = users[i][a]
            myTr.appendChild(td1)
        }
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.setAttribute("onclick", "edituser(" + i + ")")
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.setAttribute("onclick", "deleteuser(" + i + ")")

        deleteBtn.innerHTML = "Delete"
        deleteTd.appendChild(deleteBtn)

        myTr.appendChild(editTd)

        myTr.appendChild(deleteTd)


        document.querySelector('tbody').appendChild(myTr)
    }
}
displayusers();