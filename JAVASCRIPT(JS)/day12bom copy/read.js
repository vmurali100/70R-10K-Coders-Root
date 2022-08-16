function getdatafromserver(){
    // var apiurl="http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=tru"
   var apiurl="http://localhost:3000/users"
    var getdata=new XMLHttpRequest();

    getdata.onreadystatechange=function(){
        if (getdata.readyState==4&&getdata.status==200) {
            console.log( typeof getdata.response)
            
            ajay=JSON.parse(getdata.response);
            console.log(ajay)
            displayusers()
        }
    }

    getdata.open("get",apiurl);
    getdata.send()

}
function displayusers() {
    
    document.querySelector("tbody").innerHTML = ""
    for (i = 0; i<ajay.length; i++) {
        var tr = document.createElement("tr");
        for (a in ajay[i]) {
            var td1 = document.createElement("td");
            td1.innerHTML = ajay[i][a]; 
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
// getdatafromserver()


function edituser(index) {
    // globalindex = index;
    // var newuser = ajay[index]
    // document.getElementById("fname").value = newuser.fname
    // document.getElementById("lname").value = newuser.lname
    // document.getElementById("tel").value = newuser.tel
    // document.getElementById("address").value = newuser.address
    // document.getElementById("city").value = newuser.city
    // document.getElementById("state").value = newuser.state
    // document.getElementById("zip").value = newuser.zip
    // document.getElementById("id").value=newuser.id
   

    // swapbuttons(true)
    window.location.href="edit.html?"+index
}
