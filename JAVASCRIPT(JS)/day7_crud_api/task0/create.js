// ajay[globalindex] = user
function adduser() {
    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value,
        id:document.getElementById("id").value,
    }
    // ajay[globalindex] = user
    // displayusers();
    // cleartable();
    // swapbuttons(false)

    var apiurl="http://localhost:3000/users/"
    var createuser=new XMLHttpRequest();
    createuser.onreadystatechange=function(){
        if (createuser.readyState ==4 && createuser.status==200) { 
          getdatafromserver()
}
    }
    createuser.open("POST",apiurl+ajay[globalindex].id);
    createuser.setRequestHeader("content-type","application/json")
    createuser.send(JSON.stringify(user))
}