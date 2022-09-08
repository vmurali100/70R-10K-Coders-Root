function validate() {
    var idValue = document.getElementById("id").value; //we are getting the value
    var textPattern = /[a-z]/i
    var emailValue = document.getElementById("email").value;
    var emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i




    //check for ID and Alphabets//
    if (idValue.length > 0 && !textPattern.test(idValue) && emailPattern.test(emailValue)) { //!= opposite
        document.getElementById("addBtn").removeAttribute("disabled") //enabled//
    } else {
        document.getElementById("addBtn").setAttribute("disabled", true)

    }
    //check for Alphabets show error message//

    if (textPattern.test(idValue)) {
        document.querySelector("#idError").style.display = "block"

    } else {
        document.querySelector("#idError").style.display = "none"

    }

    if (!emailPattern.test(emailValue) && emailValue.length > 0) {
        document.querySelector("#emailError").style.display = "block"

    } else {
        document.querySelector("#emailError").style.display = "none"

    }

}