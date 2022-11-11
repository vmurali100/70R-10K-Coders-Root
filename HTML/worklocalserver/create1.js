function swapButtons(value) {
    if (value === true) {
        document.getElementById("sign").style.display = "none";
        document.getElementById("update").style.display = "block";
    }
    else {
        document.getElementById("sign").style.display = "block";
        document.getElementById("update").style.display = "none";
    }
}
function rules() {
    var fnamevalue = document.getElementById("fname").value;
    var fnamevalue1 = /[0-9]/
    var lnamevalue = document.getElementById("lname").value;
    var lnamevalue1 = /[a-z]/i
    var telvalue = document.getElementById("tel").value;
    var telvalue1 = /[a-z]/i
    var addressvalue = document.getElementById("address").value;
    var addressvalue1 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i
    var statevalue = document.getElementById("state").value;
    var statevalue1 = /[0-9]/
    var cityvalue = document.getElementById("city").value;
    var cityvalue1 = /[0-9]/
    var zipvalue = document.getElementById("zip").value;
    var zipvalue1 = /[a-z]/i
    if (fnamevalue.length > 0 && !fnamevalue1.test(fnamevalue) && lnamevalue.length > 0 && !lnamevalue1.test(lnamevalue) && telvalue.length > 0 && !telvalue1.test(telvalue) && addressvalue.length > 0 && addressvalue1.test(addressvalue) && statevalue.length > 0 && !statevalue1.test(statevalue) && cityvalue.length > 0 && !cityvalue1.test(cityvalue) && zipvalue.length >5 && !zipvalue1.test(zipvalue)) {
        document.getElementById("sign").removeAttribute("disabled");
    }
    else {
        document.getElementById("sign").setAttribute("disabled", true);
    }
    if (fnamevalue.length > 0 && fnamevalue1.test(fnamevalue)) {
        document.getElementById("fname1").style.display = "block";
    }
    else {
        document.getElementById("fname1").style.display = "none";
    }
    if (lnamevalue.length > 0 && lnamevalue1.test(lnamevalue)) {
        document.getElementById("lname1").style.display = "block";
    }
    else {
        document.getElementById("lname1").style.display = "none";
    }
    if (telvalue.length > 0 && telvalue1.test(telvalue)) {
        document.getElementById("tel1").style.display = "block";
    }
    else {
        document.getElementById("tel1").style.display = "none";
    }
    if (addressvalue.length > 0 && !addressvalue1.test(addressvalue)) {
        document.getElementById("address1").style.display = "block";
    }
    else {
        document.getElementById("address1").style.display = "none";
    }
    if (statevalue.length > 0 && statevalue1.test(statevalue)) {
        document.getElementById("state1").style.display = "block";
    }
    else {
        document.getElementById("state1").style.display = "none";
    }
    if (cityvalue.length > 0 && cityvalue1.test(cityvalue)) {
        document.getElementById("city1").style.display = "block";
    }
    else {
        document.getElementById("city1").style.display = "none";
    }
    if (zipvalue.length > 0 && zipvalue.length <6) {
        document.getElementById("zip1").style.display = "block";
    }
    else {
        document.getElementById("zip1").style.display = "none";
    }
}