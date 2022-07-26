

var users = [
    {
        "fname": "Stanley",
        "lname": "Evans",
        "telephone": "(684)056-2966",
        "address": "977 Et Rd",
        "city": "Lake In The Hills",
        "state": "AR",
        "zip": 25988
    },
    {
        "fname": "Angela",
        "lname": "Arivett",
        "telephone": "(742)704-0293",
        "address": "1831 Nunc Ave",
        "city": "North Bend",
        "state": "SC",
        "zip": 14487
    },
    {
        "fname": "Bob",
        "lname": "Presas",
        "telephone": "(654)847-5754",
        "address": "4514 Lectus St",
        "city": "Augusta",
        "state": "DC",
        "zip": 69335
    },
    {
        "fname": "Gianfranco",
        "lname": "Oconnor",
        "telephone": "(956)880-4905",
        "address": "5517 Sollicitudin Ct",
        "city": "Bessemer City",
        "state": "WA",
        "zip": 18753
    },
    {
        "fname": "Marisela",
        "lname": "Harper",
        "telephone": "(749)685-1250",
        "address": "6881 Sapien Ct",
        "city": "Berlin",
        "state": "DC",
        "zip": 49338
    },
    {
        "fname": "Oren",
        "lname": "Hovanec",
        "telephone": "(303)703-5708",
        "address": "3899 Tortor Dr",
        "city": "Oakland",
        "state": "NJ",
        "zip": 14489
    },
    {
        "fname": "Byron",
        "lname": "Hougland",
        "telephone": "(948)772-5685",
        "address": "3802 In Ln",
        "city": "Roy",
        "state": "AL",
        "zip": 47776
    },
    {
        "fname": "Shanna",
        "lname": "Berger",
        "telephone": "(282)116-1919",
        "address": "4114 Vel St",
        "city": "Roxboro",
        "state": "NJ",
        "zip": 95108
    },
    {
        "fname": "Kimberleigh",
        "lname": "Mcalevey",
        "telephone": "(826)511-2723",
        "address": "9966 Sed Dr",
        "city": "Honolulu",
        "state": "SC",
        "zip": 53021
    },
    {
        "fname": "Freddy",
        "lname": "Granzow",
        "telephone": "639-9183",
        "address": "6254 In Rd",
        "city": "Duck River",
        "state": "DC",
        "zip": 57084
    }
]

function adduser() {

    var temp = {
        
        fname: document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        telephone: document.getElementById("telephone").value,
        address   : document.getElementById("address").value,
        city   : document.getElementById("city").value,
        state   : document.getElementById("state").value,
        zip   : document.getElementById("zip").value,

    }

    users.push(temp)

    displayuser()

    clearform()
}


function validate() {

    var fnameValue = document.getElementById("fname").value;

    fnamepattern = /[0-9]/

    var lnameValue = document.getElementById("lname").value;

    lnamepattern = /[0-9]/

    var telephoneValue = document.getElementById("telephone").value;

    telephonepattern = /[a-z]/

    var addressValue = document.getElementById("address").value;

    

    var cityValue = document.getElementById("city").value;

    citypattern = /[0-9]/

    var stateValue = document.getElementById("state").value;

    statepattern = /[0-9]/

    var zipValue = document.getElementById("zip").value;

    zippattern = /[a-z]/


   



    //check for id and  aplhabets

    if (fnameValue.length > 0 && // true
        !fnamepattern.test(fnameValue) &&
        fnameValue.length > 0 &&   //true
        !lnamepattern.test(lnameValue) && //true
        telephoneValue.length > 0 && 
        !telephonepattern.test(telephoneValue) && 
        addressValue.length > 0 && 
        !citypattern.test(cityValue) &&
        cityValue.length>0 && 
        !statepattern.test(stateValue) && 
        stateValue.length>0 && 
        zipValue.length>0 && 
        !zippattern.test(zipValue) ){
        document.getElementById("addBtn").removeAttribute("disabled") //removes disabled on addBtn

    }
    else {
        document.getElementById("addBtn").setAttribute("disabled", true)
    }

    //check for alphabets to show error message

    if (fnamepattern.test(fnameValue) && fnameValue.length > 0) {
        document.querySelector("#fnameerror").style.display = "block";
    }
    else {
        document.querySelector("#fnameerror").style.display = "none";
    }
    // ------------------------------------------------------------------------------------------------

    if (lnamepattern.test(lnameValue) && lnameValue.length > 0) {
        document.querySelector("#lnameerror").style.display = "block";
    }
    else {
        document.querySelector("#lnameerror").style.display = "none";
    }
    // -------------------------------------------------------------------------------------------------------------
    if (telephonepattern.test(telephoneValue) && telephoneValue.length > 0) {
        document.querySelector("#telephoneerror").style.display = "block"
    }
    else {
        document.querySelector("#telephoneerror").style.display = "none"
    }

    //  ------------------------------------------------------------------------------------------------------------------   
    if (addressValue.length < 5 && addressValue.length > 0) {
        document.querySelector("#addresserror").style.display = "block"
    }
    else {
        document.querySelector("#addresserror").style.display = "none"
    }

    if (citypattern.test(cityValue) && cityValue.length > 0) {
        document.querySelector("#cityerror").style.display = "block"
    }
    else {
        document.querySelector("#cityerror").style.display = "none"
    }

    if (statepattern.test(stateValue) && stateValue.length > 0) {
        document.querySelector("#stateerror").style.display = "block"
    }
    else {
        document.querySelector("#stateerror").style.display = "none"
    }

    if (zippattern.test(zipValue) && zipValue.length > 0) {
        document.querySelector("#ziperror").style.display = "block"
    }
    else {
        document.querySelector("#ziperror").style.display = "none"
    }
}