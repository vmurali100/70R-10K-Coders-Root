
var user=[]

function displayuser() { // used to enter user data in the form of table

    document.querySelector("tbody").innerHTML = "" //used to clear the table to avoid duplicate entries of the user data

    for (i = 0; i < user.length; i++) {
        var trow = document.createElement("tr")
        document.querySelector("tbody").appendChild(trow)
        for (a in user[i]) {
            var td1 = document.createElement("td")
            td1.innerHTML = user[i][a]
            trow.appendChild(td1)
        }

        
        var edittd = document.createElement("td")
        var editBtn = document.createElement("button")
        editBtn.setAttribute("class","btn btn-warning")
        editBtn.innerHTML="edit"
        editBtn.setAttribute("onclick","edituser("+i+")")
        editBtn.setAttribute("type","button")
        edittd.appendChild(editBtn)
        trow.appendChild(edittd)
        

        var deletetd = document.createElement("td")
        var deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("class","btn btn-danger")
        deleteBtn.innerHTML="delete"
        deleteBtn.setAttribute("onclick","deleteuser("+i+")")
        deleteBtn.setAttribute("type","button")
        deletetd.appendChild(deleteBtn)
        trow.appendChild(deletetd)

    }
}

getDatafromServer2()


function clearform(){
    document.getElementById("fname").value=""
    document.getElementById("lname").value=""
    document.getElementById("mobile").value=""
    document.getElementById("city").value=""
}


function getDatafromServer2(){

           

    var api_url = "http://localhost:3000/user"
    var getData = new XMLHttpRequest();

    getData.onreadystatechange = function(){
        if (getData.readyState == 4 && getData.status==200) {
            console.log(getData.response)

            console.log(typeof(getData.response))

            console.log(typeof(user))

            user = JSON.parse(getData.response);  //parses string to array. users is array and getData.response is of string type

            console.log(user)

            displayuser()
        }

     

        
    }

    getData.open("GET",api_url)
    getData.send()
}



