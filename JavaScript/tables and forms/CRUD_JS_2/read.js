

function displayuser() { // used to enter user data in the form of table

    document.querySelector("tbody").innerHTML = "" //used to clear the table to avoid duplicate entries of the user data

    for (i = 0; i < user.length; i++) {
        var trow = document.createElement("tr")
        document.querySelector("tbody").appendChild(trow)
        for (a in user[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = user[i][a]
            trow.appendChild(td1)
        }

        
        var edittd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class","btn btn-warning")
        editBtn.innerHTML="edit"
        editBtn.setAttribute("onclick","edituser("+i+")")
        edittd.appendChild(editBtn)
        trow.appendChild(edittd)
        

        var deletetd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class","btn btn-danger")
        deleteBtn.innerHTML="delete"
        deleteBtn.setAttribute("onclick","deleteuser("+i+")")
        deletetd.appendChild(deleteBtn)
        trow.appendChild(deletetd)

    }
}


function clearform(){
    document.getElementById("fname").value=""
    document.getElementById("lname").value=""
    document.getElementById("mobile").value=""
    document.getElementById("city").value=""
}


displayuser()