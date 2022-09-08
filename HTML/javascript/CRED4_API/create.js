
// var users = [
//     {
//         "id": 81,
//         "email": "SWhatley@nunc.io",
//         "username": "LPillai",
//         "password": "Az8Av",
//     },
//     {
//         "id": 82,
//         "email": "CBullock@ipsum.com",
//         "username": "JNimon",
//         "password": "IRDq3",
//     },
//     {
//         "id": 83,
//         "email": "VGeouque@tellus.org",
//         "username": "EDemerath",
//         "password": "bXrwu",
//     },
// ];







// function adduser() {  //used to add the values entered into the form to the user object

//     var user = {

//         id: document.getElementById("id").value, // data entered by the user in the form is stored as id

//         email: document.getElementById("email").value,  // data entered by the user in the form is stored as email

//         username: document.getElementById("username").value,  // data entered by the user in the form is stored as username

//         password: document.getElementById("password").value,  // data entered by the user in the form is stored as password
//     }

//     users.push(user)  // pushes the user data into the users array

//     displayuser() // displays the users data in the form of table.

//     clearform()

// }


function adduser() {

 
    temp = {
    id : document.getElementById("id").value,
    email: document.getElementById("email").value,
    username :document.getElementById("username").value,
    password : document.getElementById("password").value

    };

    var api_url = "http://localhost:3000/users/"

    var add_user = new XMLHttpRequest();

    add_user.onreadystatechange = function () {
        if (add_user.readyState == 4 && add_user.status == 200) {
            console.log("user added successfully")
            getDatafromServer()

        }
    }
    add_user.open("POST",api_url) ;
    add_user.setRequestHeader("Content-Type", "application/json")
    add_user.send(JSON.stringify(temp))

}

function validate() {

    var idValue = document.getElementById("id").value;
    var idpattern = /[a-z]/i

    var emailValue = document.getElementById("email").value;
    var emailpattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i

    var userValue = document.getElementById("username").value

    var passValue = document.getElementById("password").value

    //check for id and  aplhabets

    if (idValue.length > 0 &&
        !idpattern.test(idValue) &&
        emailpattern.test(emailValue) &&
        userValue.length > 5 &&
        passValue.length > 5) {
        document.getElementById("addBtn").removeAttribute("disabled")

    }
    else {
        document.getElementById("addBtn").setAttribute("disabled", true)
    }

    //check for alphabets to show error message

    if (idpattern.test(idValue)) {
        document.querySelector("#iderror").style.display = "block";
    }
    else {
        document.querySelector("#iderror").style.display = "none";
    }
// ------------------------------------------------------------------------------------------------

    if (!emailpattern.test(emailValue) && emailValue.length > 0) {
        document.querySelector("#emailerror").style.display = "block";
    }
    else {
        document.querySelector("#emailerror").style.display = "none";
    }
// -------------------------------------------------------------------------------------------------------------
    if(userValue.length < 6 && userValue.length > 0){
        document.querySelector("#usernameerror").style.display="block"
    }
    else{
        document.querySelector("#usernameerror").style.display="none"
    }
    
//  ------------------------------------------------------------------------------------------------------------------   
    if(passValue.length < 6 && passValue.length > 0){
        document.querySelector("#passworderror").style.display="block"
    }
    else{
        document.querySelector("#passworderror").style.display="none"
    }
    




}