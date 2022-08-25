function edituser(index) {
    globalindex = index;
    var newuser = sip[index]
    document.getElementById("postid").value=newuser.postid
        document.getElementById("id").value=newuser.id
        document.getElementById("name").value=newuser.name
        document.getElementById("email").value=newuser.email
        document.getElementById("body").value=newuser.body


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
        postid: document.getElementById("postid").value,
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        body: document.getElementById("body").value
    }

    // displayusers();
    // cleartable();
    // swapbuttons(false)

    var apiurl = "http://localhost:3000/sip/"
    var updateuser = new XMLHttpRequest();
    updateuser.onreadystatechange = function () {
        if (updateuser.readyState == 4 && updateuser.status == 200) {
            getdatafromserver()
        }
    }
    updateuser.open("PUT", apiurl + sip[globalindex].id);
    updateuser.setRequestHeader("content-type", "application/json")
    updateuser.send(JSON.stringify(user))
}