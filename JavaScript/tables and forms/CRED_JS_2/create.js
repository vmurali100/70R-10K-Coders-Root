
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


