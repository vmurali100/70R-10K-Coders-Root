var api_url = "http://localhost:3000/one"

function getDatafromServer(){

    var getData = new XMLHttpRequest();

    getData.onreadystatechange=function(){
        if(getData.readyState==4 && getData.status==200){
            console.log(getData.response)
            console.log(typeof(getData.response))
            one = JSON.parse(getData.response)
            diplayusers()
        }
    }
    getData.open("GET",api_url)
    getData.send()
}

function diplayusers(){

    document.querySelector("tbody").innerHTML=""
    for(i=0;i<one.length;i++){
        var trow = document.createElement("tr")
        document.querySelector("tbody").appendChild(trow)

      

        for(a in one[i]){
            var td1 = document.createElement("td")
            td1.innerHTML = one[i][a]
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

getDatafromServer()