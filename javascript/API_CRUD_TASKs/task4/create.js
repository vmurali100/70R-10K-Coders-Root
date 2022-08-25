function adduser() {
    var user = {
        postid: document.getElementById("postid").value,
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        body: document.getElementById("body").value
    }
    //
    
    //sip[globalindex] = user
    // displayusers();
    // cleartable();
    // swapbuttons(false)

    var apiurl="http://localhost:3000/sip/"
    var createuser=new XMLHttpRequest();
    createuser.onreadystatechange=function(){
        if (createuser.readyState ==4 && createuser.status==200) { 
          getdatafromserver()
}
    }
    createuser.open("POST",apiurl);
    createuser.setRequestHeader("content-type","application/json")
    createuser.send(JSON.stringify(user))
}