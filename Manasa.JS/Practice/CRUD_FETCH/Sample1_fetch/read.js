var users =[]

function getDataFromServer(){
    var api_url ="http://localhost:3000/users/"

    async function handleFetchAsync() {
        var usersInfo = await fetch(api_url) //1st then
        var users = await usersInfo.json(); //2nd then
        console.log(users)
        displayUsers()
    }


    handleFetchAsync()
    
}

function displayUsers() { 

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
        editBtn.setAttribute("onclick","editUser("+i+")")
        editBtn.setAttribute("type","button")
        editBtn.innerHTML="edit"
        edittd.appendChild(editBtn)
        myTr.appendChild(edittd)
        

        var deletetd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class","btn btn-danger")
        deleteBtn.setAttribute("onclick","deleteUser("+i+")")
        deleteBtn.setAttribute("type","button")
        deleteBtn.innerHTML="Delete"
        deletetd.appendChild(deleteBtn)

        myTr.appendChild(edittd)
        myTr.appendChild(deletetd)

        document.querySelector("tbody").appendChild(myTr)


    }
}



