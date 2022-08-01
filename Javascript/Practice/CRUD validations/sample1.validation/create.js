function validate() {
    var idValue = document.getElementById("id").value;
    console.log(idValue)
    var textPattern = /[a-z]/i
    var emailValue = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var emailPattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i




    //check for ID and Alphabets
    if (
        idValue.length > 0 &&
        !textPattern.test(idValue) &&
        emailPattern.test(emailValue) &&
        username.length > 5 &&
        password.length > 5
    ) {
        document.getElementById("addBtn").removeAttribute("disabled")
    } else {
        document.getElementById("addBtn").setAttribute("disabled", true)
    }
    //check for alphabets show error message
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

    if (username.length < 6 && username.length > 0) {
        document.querySelector("#usernameError").style.display = "block"
    } else {
        document.querySelector("#usernameError").style.display = "none"

    }

    if (password.length < 6 && password.length > 0) {
        document.querySelector("#passwordError").style.display = "block"
    } else {
        document.querySelector("#passwordError").style.display = "none"

    }


}