


var user = [
    {
        Company: "Hynuda",
        Model: "Santro",
        Engine: "1100cc",
        Fueltype: "Petrol",
    },
    {
        Company: "Maruthi",
        Model: "Swift",
        Engine: "1100cc",
        Fueltype: "Diesel",
    },
    {
        Company: "Tata",
        Model: "Tiago",
        Engine: "1100cc",
        Fueltype: "Petrol",
    },

]

function adduser() {

    temp = {

        company: document.getElementById("company").value,
        model: document.getElementById("model").value,
        engine: document.getElementById("engine").value,
        fueltype: document.getElementById("fueltype").value,
    }

    user.push(temp)

    displayuser()
    clearform()

}


function validate() {

    var companyValue = document.getElementById("company").value;

    var companypattern = /[0-9]/i




    var modelValue = document.getElementById("model").value;


    var engineValue = document.getElementById("engine").value

    var fueltypeValue = document.getElementById("fueltype").value
    var fueltypepattern = /[petrol][diesel]/i



    //check for id and  aplhabets

    if (companyValue.length > 0 &&
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

