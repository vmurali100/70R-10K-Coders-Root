var users = []
function getDataFromServer() {
    var api_url = ""
    var getData = new XMLHttpRequest();

    getData.onreadystatechange = function () {
        if (getData.readyState == 4 && getData.status == 200) {
            console.log(getData.response);
            // to convert a string as object
            users = JSON.parse(getData.response);
            console.log(users)
        }
    }
}
function displayUsers() {
    document.querySelector("tbody").innerHTML = "";
    for (i = 0; i < users.length; i++) {
        var myTr = document.createElement("tr");

        for (a in users[i]) {
            var td1 = document.createElement("td");
            td1.innerHTML = users[i][a];
            myTr.appendChild(td1)
        }

        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("onclick", "editUser(" + i + ")")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.innerHTML = "Delete"
        deleteTd.appendChild(deleteBtn)

        myTr.appendChild(editTd)
        myTr.appendChild(deleteTd)

        document.querySelector("tbody").appendChild(myTr)
    }
}