

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

var information = [];

function getDatafromServer4(){

    api_url = "http://localhost:3000/information/";
    var getData = new XMLHttpRequest();

    getData.onreadystatechange = function(){
        if(getData.readyState == 4 && getData.status == 200){
            console.log(getData.response)

            information = JSON.parse(getData.response)

            console.log(information)

            displayuser()
        }
    }

    getData.open("GET",api_url)
    getData.send()
}


function clearform(){


document.getElementById("id").value = ""
document.getElementById("playername").value = ""
document.getElementById("role").value = ""
document.getElementById("matchesplayed").value = ""
document.getElementById("runsscored").value = ""

}


displayuser()
getDatafromServer4()