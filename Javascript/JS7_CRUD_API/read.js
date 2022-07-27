var users = []

function getDataFromServer() {
    var api_url = "http://filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
    var getData = new XMLHttpRequest(); // it invokes for creating an object and that data will get stored in getdata 

    getData.onreadystatechange = function() {
        if (getData.readyState == 4 && getData.status == 200) { // thhis function will be repeated if data changes 1 to 2, 2 to 3..
            console.log(getData.response)
                // to convert a string to object
            users = JSON.parse(getData.response);
            console.log(users)



        }
    }
    getData.open("GET", api_url);
    getData.send()
    displayUsers()
}

function displayUsers() {

    document.querySelector("tbody").innerHTML = "";

    for (i = 0; i < users.length; i++) {
        var myTr = document.createElement("tr")

        for (a in users[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = users[i][a]
            myTr.appendChild(td1)
        }


        var editTd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.setAttribute("onclick", "edituser(" + i + ")")
        editBtn.innerHTML = "edit"
        editTd.appendChild(editBtn)


        var deleteTd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.setAttribute("onclick", "deleteuser(" + i + ")")
        deleteBtn.innerHTML = "Delete"
        deleteTd.appendChild(deleteBtn)

        myTr.appendChild(editTd)

        myTr.appendChild(deleteTd)


        document.querySelector("tbody").appendChild(myTr);
        /* document.querySelector("table").style.display = "block"*/


    }
}



// function clearform() {  

//     document.getElementById("id").value = ""  
//     document.getElementById("email").value = ""
//     document.getElementById("username").value = ""
//     document.getElementById("password").value = ""
// }


displayuser();