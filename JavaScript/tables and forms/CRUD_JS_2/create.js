
     user =[
            {
            fname:"Prudhvidhar",
            lname : "Rathna",
            mobile : 6300560726,
            city : "Warangal",
        },
        {
            fname: "Uday",
            lname : "Dasharadhi",
            mobile : 9866982726,
            city : "hyderabad",
        },
        {
            fname: "Shravya",
            lname : "Reddy",
            mobile : 9876543210,
            city : "Karimnagar"
        },
        {
            fname: "Tejaswi",
            lname : "Kasidi",
            mobile : 9876543210,
            city : "Khammam"
        }
    ];

    
function adduser() {  //used to add the values entered into the form to the user object

    var temp = {

        fname: document.getElementById("fname").value, // data entered by the user in the form is stored as id

        lname: document.getElementById("lname").value,  // data entered by the user in the form is stored as email

        mobile: document.getElementById("mobile").value,  // data entered by the user in the form is stored as username

        city: document.getElementById("city").value,  // data entered by the user in the form is stored as password
    }

    user.push(temp)  // pushes the user data into the users array

    displayuser() // displays the users data in the form of table.

    clearform()

}

function validate() {

    var fnameValue = document.getElementById("fname").value;
  

    var lnameValue = document.getElementById("lname").value;
   

    var mobileValue = document.getElementById("mobile").value


    var cityValue = document.getElementById("city").value

    //check if add button should be disable or not

    if (fnameValue.length > 5 &&
        lname.length > 5 &&
        mobile.length > 9 &&
        cityValue.length > 5) {
        document.getElementById("addBtn").removeAttribute("disabled")

    }
    else {
        document.getElementById("addBtn").setAttribute("disabled", true)
    }

    //check for alphabets to show error message

    if(fnameValue.length < 6 && fnameValue.length > 0){
        document.querySelector("#fnameerror").style.display="block"
    }
    else{
        document.querySelector("#fnameerror").style.display="none"
    }
    // --------------------------------------------------------------------------------------------

    if (lnameValue.length < 6 && lnameValue.length > 0) {
        document.querySelector("#lnameerror").style.display = "block";
    }
    else {
        document.querySelector("#lnameerror").style.display = "none";
    }
// -------------------------------------------------------------------------------------------------------------
    if(mobileValue.length < 10 && mobileValue.length > 0){
        document.querySelector("#mobileerror").style.display="block"
    }
    else{
        document.querySelector("#mobileerror").style.display="none"
    }
    
//  ------------------------------------------------------------------------------------------------------------------   
    if(cityValue.length < 6 && cityValue.length > 0){
        document.querySelector("#cityerror").style.display="block"
    }
    else{
        document.querySelector("#cityerror").style.display="none"
    }
    




}



