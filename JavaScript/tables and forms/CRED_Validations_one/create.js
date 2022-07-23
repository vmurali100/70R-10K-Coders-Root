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