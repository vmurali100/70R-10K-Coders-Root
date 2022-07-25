var Users = [{
        "fname": "Tijana",
        "lname": "Gates",
        "tel": "(596)559-9527",
        "address": "5894 Elementum Ave",
        "city": "Sterling",
        "state": "OK",
        "zip": 66365
    }, {
        "fname": "Clyde",
        "lname": "Hopson",
        "tel": "(942)230-6540",
        "address": "6189 Vestibulum Ave",
        "city": "Bridgewater",
        "state": "GA",
        "zip": 28192
    }, {
        "fname": "Catherine",
        "lname": "Schemanski",
        "tel": "(817)205-4332",
        "address": "5285 Molestie Dr",
        "city": "Pine Mountain",
        "state": "NM",
        "zip": 86034
    },
    {

        "fname": "Hurley",
        "lname": "Gilbertson",
        "tel": "(997)296-5256",
        "address": "6529 Turpis Ct",
        "city": "Eglin Afb",
        "state": "LA",
        "zip": 27182
    }, {
        "fname": "Yauma",
        "lname": "Brinker",
        "tel": "(259)381-7728",
        "address": "4714 Non Dr",
        "city": "Harper Woods",
        "state": "ND",
        "zip": 29681
    }, {
        "fname": "Minnita",
        "lname": "Hollis",
        "tel": "(664)845-1552",
        "address": "9247 Sit Ln",
        "city": "Mansfield",
        "state": "CA",
        "zip": 76868
    },
];

function addUser() {
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    users.push(user);
    displayUsers();
    clearTable()
}