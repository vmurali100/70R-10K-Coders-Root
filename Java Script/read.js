function displayuser() { 

    document.querySelector("tbody").innerHTML = "" 

    for (i = 0; i < users.length; i++) {
        var myTr = document.createElement("tr")
        document.querySelector("tbody").appendChild(myTr)

        for (a in users[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = users[i][a]
            myTr.appendChild(td1)
        }


        var edittd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class","btn btn-warning")
        editBtn.innerHTML="edit"
        editBtn.setAttribute("onclick","edituser("+i+")")
        edittd.appendChild(editBtn)
        myTr.appendChild(edittd)
        

        var deletetd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class","btn btn-danger")
        deleteBtn.innerHTML="Delete"
        deleteBtn.setAttribute("onclick","deleteuser("+i+")")
        deletetd.appendChild(deleteBtn)
        myTr.appendChild(deletetd)


    }
}



function clearform() {  

    document.getElementById("id").value = ""  
    document.getElementById("email").value = ""
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
}


displayuser()