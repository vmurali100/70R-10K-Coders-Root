var details = []

function getDataFromServer() {
    var api_url = "http://localhost:3000/details"
    var getData = new XMLHttpRequest(); // it invokes for creating an object and that data will get stored in getdata 

    getData.onreadystatechange = function() {
        if (getData.readyState == 4 && getData.status == 200) { // thhis function will be repeated if data changes 1 to 2, 2 to 3..
            console.log(getData.response)
            console.log(typeof(getData.response))
                // to convert a string to object
            details = JSON.parse(getData.response);
            console.log(typeof(details))
            displayUsers()

        }
    };
    getData.open("GET", api_url);
    getData.send()
}
displayUsers()


function displayUsers() {

    document.querySelector("tbody").innerHTML = "";

    for (i = 0; i < details.length; i++) {
        var myTr = document.createElement("tr")
        document.querySelector("tbody").appendChild(myTr)

        for (a in details[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = details[i][a]
            myTr.appendChild(td1)
        }


        var edittd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.setAttribute("onclick", "editUser(" + i + ")")
        editBtn.setAttribute("type", "button")
        editBtn.innerHTML = "edit"
        edittd.appendChild(editBtn)
        myTr.appendChild(edittd)


        var deletetd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")")
        deleteBtn.setAttribute("type", "button")
        deleteBtn.innerHTML = "delete"
        deletetd.appendChild(deleteBtn)

        myTr.appendChild(edittd)
        myTr.appendChild(deletetd)

        document.querySelector("tbody").appendChild(myTr)


    }
}
getDataFromServer()