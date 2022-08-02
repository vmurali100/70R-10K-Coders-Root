


var todos = []
var api_url = "http://localhost:3000/todos"


async function getuserdata(){
       var info = await fetch(api_url)
       todos = await info.json()
       console.log(todos)
      displayuser()
}

getuserdata()

function displayuser() {

document.querySelector("tbody").innerHTML = ""

    console.log(typeof(todos))

    for (i = 0; i < todos.length; i++) {

       

        var trow = document.createElement("tr")

        document.querySelector("tbody").appendChild(trow)

        for (a in todos[i]) {
            var tdata = document.createElement("td")
            tdata.innerHTML = todos[i][a]
            trow.appendChild(tdata)
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
        deleteBtn.setAttribute("onclick", "fetchdelete("+i+")")
        deleteBtn.setAttribute("type", "button")
        deletetd.appendChild(deleteBtn)
        trow.appendChild(deletetd)

    }

}