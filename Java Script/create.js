var users =

    [
        {
            "id": 17,
            "email": "SBillanti@risus.gov",
            "username": "SPento",
            "password": "i6gWr"
        },
        {
            "id": 18,
            "email": "FSzymanski@aliquam.com",
            "username": "AValkanet",
            "password": "U1ddq"
        },
        {
            "id": 19,
            "email": "CFrets@scelerisque.net",
            "username": "CFrutos",
            "password": "Va16n"
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