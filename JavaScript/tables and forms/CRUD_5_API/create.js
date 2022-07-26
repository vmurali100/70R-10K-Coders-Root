



function adduser() {

    var temp = {

        id: document.getElementById("id").value,
        fname: document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
        telephone: document.getElementById("telephone").value,
        address   : document.getElementById("address").value,
        city   : document.getElementById("city").value,
        state   : document.getElementById("state").value,
        zip   : document.getElementById("zip").value,

    }

    var api_url = "http://localhost:3000/employee"
    
    var add_user = new XMLHttpRequest()

    add_user.onreadystatechange = function(){
        if(add_user.readyState == 4 && add_user.status == 200){
            console.log(add_user.response)
            getDatafromServer5()
        }

    }

    add_user.open("POST",api_url)
    add_user.setRequestHeader("Content-Type","application/json")
    add_user.send(JSON.stringify(temp))

    displayuser()

    clearform()
}


// function validate() {

//     var idValue = document.getElementById("id").value;

//     idpattern = /[a-z]/i

//     var fnameValue = document.getElementById("fname").value;

//     fnamepattern = /[0-9]/

//     var lnameValue = document.getElementById("lname").value;

//     lnamepattern = /[0-9]/

//     var telephoneValue = document.getElementById("telephone").value;

//     telephonepattern = /[a-z]/

//     var addressValue = document.getElementById("address").value;

    

//     var cityValue = document.getElementById("city").value;

//     citypattern = /[0-9]/

//     var stateValue = document.getElementById("state").value;

//     statepattern = /[0-9]/

//     var zipValue = document.getElementById("zip").value;

//     zippattern = /[a-z]/


   



//     //check for id and  aplhabets

//     if (idValue.length > 0 &&
        
//         fnameValue.length > 0 &&
    
//         lnameValue.length > 0 &&   
       
//         telephoneValue.length > 0 && 
        
//         addressValue.length > 0 && 
       
//         cityValue.length > 0 && 
        
//         stateValue.length > 0 &&

//         zipValue.length > 0){  
     
//         document.getElementById("addBtn").removeAttribute("disabled") //removes disabled on addBtn

//     } 
//     else {
//         document.getElementById("addBtn").setAttribute("disabled", true)
//     }

//     //check for alphabets to show error message

//     if (idpattern.test(idValue) && idValue.length > 0) {
//         document.querySelector("#iderror").style.display = "block";
//     }
//     else {
//         document.querySelector("#iderror").style.display = "none";
//     }

//     if (fnamepattern.test(fnameValue) && fnameValue.length > 0) {
//         document.querySelector("#fnameerror").style.display = "block";
//     }
//     else {
//         document.querySelector("#fnameerror").style.display = "none";
//     }
//     // ------------------------------------------------------------------------------------------------

//     if (lnamepattern.test(lnameValue) && lnameValue.length > 0) {
//         document.querySelector("#lnameerror").style.display = "block";
//     }
//     else {
//         document.querySelector("#lnameerror").style.display = "none";
//     }
//     // -------------------------------------------------------------------------------------------------------------
//     if (telephonepattern.test(telephoneValue) && telephoneValue.length > 0) {
//         document.querySelector("#telephoneerror").style.display = "block"
//     }
//     else {
//         document.querySelector("#telephoneerror").style.display = "none"
//     }

//     //  ------------------------------------------------------------------------------------------------------------------   
//     if (addressValue.length < 5 && addressValue.length > 0) {
//         document.querySelector("#addresserror").style.display = "block"
//     }
//     else {
//         document.querySelector("#addresserror").style.display = "none"
//     }

//     if (citypattern.test(cityValue) && cityValue.length > 0) {
//         document.querySelector("#cityerror").style.display = "block"
//     }
//     else {
//         document.querySelector("#cityerror").style.display = "none"
//     }

//     if (statepattern.test(stateValue) && stateValue.length > 0) {
//         document.querySelector("#stateerror").style.display = "block"
//     }
//     else {
//         document.querySelector("#stateerror").style.display = "none"
//     }

//     if (zippattern.test(zipValue) && zipValue.length > 0) {
//         document.querySelector("#ziperror").style.display = "block"
//     }
//     else {
//         document.querySelector("#ziperror").style.display = "none"
//     }
// }