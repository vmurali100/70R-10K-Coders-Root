var users = [

    {
        "fname": "Sharad",
        "lname": "Bruintjes",
        "tel": "(185)373-4055",
        "city": "Atlanta",
    },
    {
        "fname": "Sandro",
        "lname": "Bert",
        "tel": "(971)114-1282",
        "city": "Eagle Pass",

    },
    {
        "fname": "Gregg",
        "lname": "Koehn",
        "tel": "(593)176-6633",
        "city": "Bloomingdale",
    },
]

function addUser() {
    var user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        city: document.getElementById("city").value
    };
    users.push(user); // we are creating array and pushing elements
    displayUsers();
    clearTable()

}