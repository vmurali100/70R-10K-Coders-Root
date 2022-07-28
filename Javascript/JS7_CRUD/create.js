var users = [{
        "id": 1,
        "email": "SBillanti@risus.gov",
        "username": "SPento",
        "password": "i6gWr"
    },
    {
        "id": 2,
        "email": "FSzymanski@aliquam.com",
        "username": "AValkanet",
        "password": "U1ddq"
    },
    {
        "id": 3,
        "email": "CFrets@scelerisque.net",
        "username": "CFrutos",
        "password": "Va16n"
    },
];

function adduser() {
    var users = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    users.push(users);
    displayUsers()
    clearTable()
}