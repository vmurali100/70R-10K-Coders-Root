function getdatafromserver(){
    
   var apiurl=" http://localhost:3000/das"
    var getdata=new XMLHttpRequest();

    getdata.onreadystatechange=function(){
        if (getdata.readyState==4&&getdata.status==200) {
            console.log( typeof getdata.response)
            
            das=JSON.parse(getdata.response);
            console.log(das)
            displayusers()
        }
    }

    getdata.open("get",apiurl);
    getdata.send()

}

function displayusers() {
    
    document.querySelector("tbody").innerHTML = ""
    for (i = 0; i<das.length; i++) {
        var tr = document.createElement("tr");
        for (a in das[i]) {
            var td1 = document.createElement("td");
            td1.innerHTML = das[i][a]; 
            tr.appendChild(td1);
        }
        var editTd = document.createElement("td");
        var editBtn = document.createElement("button");
        editBtn.setAttribute("onclick","edituser("+i+")")
        editBtn.setAttribute("class","btn btn-warning ")
        editBtn.innerHTML = "Edit"
        editTd.appendChild(editBtn)

        var deleteTd = document.createElement("td");
        var deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick","deleteuser("+i+")")
        deleteBtn.setAttribute("type","button")
        deleteBtn.setAttribute("class","btn btn-danger")
        deleteBtn.innerHTML = "delete"
        deleteTd.appendChild(deleteBtn)

        tr.appendChild(editTd)
        tr.appendChild(deleteTd)
        document.querySelector("tbody").appendChild(tr);
    }
}
getdatafromserver()