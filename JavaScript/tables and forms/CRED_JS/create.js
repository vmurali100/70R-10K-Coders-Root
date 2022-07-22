
var users = [
    {
        "id": 81,
        "email": "SWhatley@nunc.io",
        "username": "LPillai",
        "password": "Az8Av",
    },
    {
        "id": 82,
        "email": "CBullock@ipsum.com",
        "username": "JNimon",
        "password": "IRDq3",
    },
    {
        "id": 83,
        "email": "VGeouque@tellus.org",
        "username": "EDemerath",
        "password": "bXrwu",
    },
];







function adduser() {  //used to add the values entered into the form to the user object

    var user = {

        id: document.getElementById("id").value, // data entered by the user in the form is stored as id

        email: document.getElementById("email").value,  // data entered by the user in the form is stored as email

        username: document.getElementById("username").value,  // data entered by the user in the form is stored as username

        password: document.getElementById("password").value,  // data entered by the user in the form is stored as password
    }

    users.push(user)  // pushes the user data into the users array

    displayuser() // displays the users data in the form of table.

    clearform()

}

