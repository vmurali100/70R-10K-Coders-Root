


// var car = [
//     {   id : 1,
//         Company: "Hynuda",
//         Model: "Santro",
//         Engine: "1100cc",
//         Fueltype: "Petrol",
//     },
//     {
//         id : 2,
//         Company: "Maruthi",
//         Model: "Swift",
//         Engine: "1100cc",
//         Fueltype: "Diesel",
//     },
//     {
//         id : 3,
//         Company: "Tata",
//         Model: "Tiago",
//         Engine: "1100cc",
//         Fueltype: "Petrol",
//     },

// ]

function adduser() {

    var temp = {

        id : document.getElementById("id").value,
        Company: document.getElementById("company").value,
        Model: document.getElementById("model").value,
        Engine: document.getElementById("engine").value,
        Fueltype: document.getElementById("fueltype").value,
    };

    var api_url = "http://localhost:3000/car/"

    var add_user = new XMLHttpRequest();

    add_user.onreadystatechange = function(){
        if(add_user.readyState == 4 && add_user.status == 200){
            console.log("data added successfully")
            getDatafromServer3()
        }
    }

    add_user.open("POST",api_url);
    add_user.setRequestHeader("Content-Type","application/json")
    add_user.send(JSON.stringify(temp));
    

}


function validate() {

    var idValue = document.getElementById("id").value

    idpattern = /[a-z]/i

    var companyValue = document.getElementById("company").value;

    var companypattern = /[0-9]/i




    var modelValue = document.getElementById("model").value;


    var engineValue = document.getElementById("engine").value

    var fueltypeValue = document.getElementById("fueltype").value
    var fueltypepattern = /[petrol][diesel]/i



    //check for id and  aplhabets

    if (idValue.length > 0 &&
        companyValue.length > 0 &&
        !companypattern.test(companyValue) &&
        modelValue.length > 4 &&
        engineValue.length > 4 &&
        fueltypeValue.length > 0 &&
        fueltypepattern.test(fueltypeValue)) {
        document.getElementById("addBtn").removeAttribute("disabled")

    }
    else {
        document.getElementById("addBtn").setAttribute("disabled", true)
    }

    //check for alphabets to show error message


    if (companypattern.test(companyValue) && companyValue.length > 0) {
        document.querySelector("#companyerror").style.display = "block";
    }
    else {
        document.querySelector("#companyerror").style.display = "none";
    }

    // --------------------------------------------------------------------------------------------------

    if (idpattern.test(idValue) && idValue.length > 0) {
        document.querySelector("#companyerror").style.display = "block";
    }
    else {
        document.querySelector("#companyerror").style.display = "none";
    }
    // ------------------------------------------------------------------------------------------------

    if (modelValue.length < 5 && modelValue.length > 0) {
        document.querySelector("#modelerror").style.display = "block";
    }
    else {
        document.querySelector("#modelerror").style.display = "none";
    }
    // -------------------------------------------------------------------------------------------------------------
    if (engineValue.length < 5 && engineValue.length > 0) {
        document.querySelector("#engineerror").style.display = "block"
    }
    else {
        document.querySelector("#engineerror").style.display = "none"
    }

    //  ------------------------------------------------------------------------------------------------------------------   
    if (!fueltypepattern.test(fueltypeValue) && fueltypeValue.length > 0) {
        document.querySelector("#fueltypeerror").style.display = "block"
    }
    else {
        document.querySelector("#fueltypeerror").style.display = "none"
    }
}

