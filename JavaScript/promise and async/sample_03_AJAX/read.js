

 var  photos = {}

function displayuser(photos) {
   
    document.querySelector("tbody").innerHTML = ""

    console.log(photos.length)

    for (i=0;i<photos.length; i++) {

        var trow = document.createElement("tr")
        document.querySelector("tbody").appendChild(trow)

        for (a in photos[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = photos[i][a]
            trow.appendChild(td1)
        }
        var edittd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.innerHTML = "edit"
        editBtn.setAttribute("onclick", "edituser(" + i + ")")
        editBtn.setAttribute("type", "button")
        edittd.appendChild(editBtn)
        trow.appendChild(edittd)


        var deletetd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.innerHTML = "delete"
        deleteBtn.setAttribute("onclick", "deleteuser(" + i + ")")
        deleteBtn.setAttribute("type", "button")
        deletetd.appendChild(deleteBtn)
        trow.appendChild(deletetd)
    }

}



