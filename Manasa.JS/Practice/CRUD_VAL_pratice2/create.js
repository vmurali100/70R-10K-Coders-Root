function validate() {
    var idValue = document.getElementById("id").value;
    console.log(idValue)
    var name = document.getElementById("name").value;

    var textPattern = /[a-z]/i
    var emailValue = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i




    //check for ID and Alphabets
    if (
        idValue.length > 0 && 
        !textPattern.test(idValue) &&
        name.length>5 &&
        username.length>5 &&
        emailPattern.test(emailValue) 
        
        ){
        document.getElementById("addBtn").removeAttribute("disabled")
    }
    else {
        document.getElementById("addBtn").setAttribute("disabled", true)
    }
    //check for alphabets show error message
    if (textPattern.test(idValue)) {
        document.querySelector("#idError").style.display = "block"
    }
    else {
        document.querySelector("#idError").style.display = "none"
    }
     

    if(name.length < 6 && name.length > 0){
        document.querySelector("#nameError").style.display = "block"
    }
    else{
        document.querySelector("#nameError").style.display = "none"

    }

    if(username.length < 6 && username.length > 0){
        document.querySelector("#usernameError").style.display = "block"
    }
    else{
        document.querySelector("#usernameError").style.display = "none"

    }

    if (!emailPattern.test(emailValue) && emailValue.length>0) {
        document.querySelector("#emailError").style.display = "block"
    }
    else {
        document.querySelector("#emailError").style.display = "none"
    }




}   