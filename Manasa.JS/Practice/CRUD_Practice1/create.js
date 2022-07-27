var user = 
    [
        {
            "fname": "Tasha",
            "lname": "Oxman",
            "address": "8555 Tortor Ct",
            "city": "Johnson County",
            "state": "AR",
            "zip": 65832
        },
        {
            "fname": "Nirmal",
            "lname": "Patel",
            "address": "3133 Morbi Ln",
            "city": "Wasington Dc",
            "state": "MN",
            "zip": 48308
        },
        {
            "fname": "Isabel",
            "lname": "Terfloth",
            "address": "2708 Pharetra Ln",
            "city": "Tucson",
            "state": "VA",
            "zip": 90077
        },
];


function adduser() {

    var user = {

        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value,
    }

    user.push(user)
    displayusers()

    clearform()

}