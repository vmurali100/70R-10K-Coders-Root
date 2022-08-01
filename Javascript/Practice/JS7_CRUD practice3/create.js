var users =

    [{
            "fname": "Cindy",
            "lname": "Beverage",
            "tel": "(815)581-7115",
            "address": "231 Dolor Rd",
            "city": "Sin City",
            "state": "FL",
            "zip": 51431
        },
        {
            "fname": "Sharad",
            "lname": "Bruintjes",
            "tel": "(185)373-4055",
            "address": "7974 Convallis Ave",
            "city": "Atlanta",
            "state": "HI",
            "zip": 18897
        },
        {
            "fname": "Sandro",
            "lname": "Bert",
            "tel": "(971)114-1282",
            "address": "7037 Sollicitudin Ct",
            "city": "Eagle Pass",
            "state": "FL",
            "zip": 10964
        },

    ];

function addUser() {
    var users = {

        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value,

    }
    users.push(users);
    displayUsers();
    clearTable()
}