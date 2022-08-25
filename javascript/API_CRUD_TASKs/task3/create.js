
function addUser(){
    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value
    };
    users[globalindex] = user
    var api_url=" http://localhost:3000/users/"
    var createUser = new XMLHttpRequest();
    createUser.onreadystatechange = function(){
        if(createUser.readyState == 4 && createUser.status == 200){
           
            getDataFromServer()
        }

    }
    createUser.open("POST",api_url);
    createUser.setRequestHeader("content-type","application/json")
    createUser.send(JSON.stringify(user))
}
