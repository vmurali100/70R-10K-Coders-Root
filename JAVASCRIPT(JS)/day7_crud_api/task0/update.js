
function edituser(index) {
    globalindex = index;
    var newuser = ajay[index]
    document.getElementById("fname").value = newuser.fname
    document.getElementById("lname").value = newuser.lname
    document.getElementById("tel").value = newuser.tel
    document.getElementById("address").value = newuser.address
    document.getElementById("city").value = newuser.city
    document.getElementById("state").value = newuser.state
    document.getElementById("zip").value = newuser.zip
    document.getElementById("id").value=newuser.id
   

    swapbuttons(true)
}

var globalindex = null;

function swapbuttons(value) {
    console.log(value);
    if (value == true) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    } else {
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}
function updateuser() {
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
    
    // displayusers();
    // cleartable();
    // swapbuttons(false)

    var apiurl="http://localhost:3000/users/"
    var updateuser=new XMLHttpRequest();
    updateuser.onreadystatechange=function(){
        if (updateuser.readyState ==4 && updateuser.status==200) { 
          getdatafromserver()
}
    }
    updateuser.open("PUT",apiurl+ajay[globalindex].id);
    updateuser.setRequestHeader("content-type","application/json")
    updateuser.send(JSON.stringify(user))
}

