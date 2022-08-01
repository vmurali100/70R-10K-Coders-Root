function validate() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var telValue = document.getElementById("tel").value;
    var addressValue = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;

    //check if add button should be disable or not

    if (fname.length > 5 &&
        lname.length > 5 &&
        telValue.length > 9 &&
        addressValue.length > 5 &&
        city.length > 5 &&
        state.length > 5
    ) {
        document.getElementById("addBtn").removeAttribute("disabled")

    } else {
        document.getElementById("addBtn").setAttribute("disabled", true)
    }

    //check for alphabets to show error message

    if (fname.length < 6 && fname.length > 0) {
        document.querySelector("#fnameError").style.display = "block"
    } else {
        document.querySelector("#fnameError").style.display = "none"
    }


    if (lname.length < 6 && lname.length > 0) {
        document.querySelector("#lnameError").style.display = "block";
    } else {
        document.querySelector("#lnameError").style.display = "none";
    }


    if (telValue.length < 10 && telValue.length > 0) {
        document.querySelector("#telError").style.display = "block"
    } else {
        document.querySelector("#telError").style.display = "none"
    }

    if (addressValue.length < 6 && addressValue.length > 0) {
        document.querySelector("#addressError").style.display = "block"
    } else {
        document.querySelector("#addressError").style.display = "none"
    }

    if (city.length < 6 && city.length > 0) {
        document.querySelector("#cityError").style.display = "block"
    } else {
        document.querySelector("#cityError").style.display = "none"
    }

    if (state.length < 6 && state.length > 0) {
        document.querySelector("#stateError").style.display = "block"
    } else {
        document.querySelector("#stateError").style.display = "none"
    }




}