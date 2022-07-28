var users = []

function getDataFromServer() {
    // var api_url = "http://filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
    var api_url = "http://localhost:3000/users"
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

    document.querySelector("tbody").innerHTML = ""

    for (i = 0; i < users.length; i++) {
        var myTr = document.createElement("tr")
        document.querySelector("tbody").appendChild(myTr)

        for (a in users[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = users[i][a];
            myTr.appendChild(td1)
        }


        var edittd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("onclick", "edituser(" + i + ")")
        editBtn.setAttribute("class", "btn btn-warning")
        editBtn.innerHTML = "edit"
        edittd.appendChild(editBtn)



        var deletetd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("class", "btn btn-danger")
        deleteBtn.innerHTML = "Delete"
        deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")")
        deletetd.appendChild(deleteBtn)

        myTr.appendChild(edittd)
        myTr.appendChild(deletetd)

        document.querySelector("tbody").appendChild(myTr);

    }
}






displayUsers()
getDataFromServer();






// function clearform() {  

//     document.getElementById("id").value = ""  
//     document.getElementById("email").value = ""
//     document.getElementById("username").value = ""
//     document.getElementById("password").value = ""
// }