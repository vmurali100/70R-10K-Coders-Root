
 var employee = []

function displayuser() {

    document.querySelector("tbody").innerHTML = ""

    for (i = 0; i < employee.length; i++) {

        var trow = document.createElement("tr")

        document.querySelector("tbody").appendChild(trow)



        for (a in employee[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = employee[i][a]
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


function clearform() {


    document.getElementById("id").value = ""
    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("telephone").value = ""
    document.getElementById("address").value = ""
    document.getElementById("city").value = ""
    document.getElementById("state").value = ""
    document.getElementById("zip").value = ""

}

function getDatafromServer5() {

    var api_url = "http://localhost:3000/employee/"

    var getData = new XMLHttpRequest()

    getData.onreadystatechange = function () {
        if (getData.readyState == 4 && getData.status == 200) {
            console.log(getData.response)
            employee = JSON.parse(getData.response)
            console.log(employee)
            displayuser()
        }

    }
    getData.open("GET",api_url)

    getData.send()
}

 getDatafromServer5()


