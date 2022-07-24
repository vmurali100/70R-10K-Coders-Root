

function displayuser(){

    document.querySelector("tbody").innerHTML = ""

    for(i=0;i<information.length;i++){

        var trow = document.createElement("tr")
        document.querySelector("tbody").appendChild(trow)

      

        for(a in information[i]){
            var td1 = document.createElement("td")
            td1.innerHTML = information[i][a]
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

document.getElementById("playername").value = ""
document.getElementById("role").value = ""
document.getElementById("matchesplayed").value = ""
document.getElementById("runsscored").value = ""

}


displayuser()