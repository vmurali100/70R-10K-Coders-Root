function adduser() {
    var user = {
        userid: document.getElementById("userid").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        body: document.getElementById("body").value
    }
    // das[globalindex] = user
    // displayusers();
    // cleartable();
    // swapbuttons(false)

    var apiurl = "http://localhost:3000/das/"
    var createuser = new XMLHttpRequest();
    createuser.onreadystatechange = function () {
        if (createuser.readyState == 4 && createuser.status == 200) {
            getdatafromserver()
        }
    }
    // createuser.open("POST", apiurl+das[globalindex].id);
    createuser.open("POST", apiurl);
    createuser.setRequestHeader("content-type","application/json");
    createuser.send(JSON.stringify(user))
}

