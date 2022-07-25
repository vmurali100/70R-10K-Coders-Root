var Users = [{
    "id": 1,
    "email": "SWathen@rutrum.org",
    "username": "LWalsh",
    "password": "HU4FY"
}, {
    "id": 2,
    "email": "BFouts@suspendisse.org",
    "username": "ASayin",
    "password": "uN0Yy"
}, {
    "id": 3,
    "email": "LConnor@ipsum.org",
    "username": "RPeltier",
    "password": "MS6lz"
}, {
    "id": 4,
    "email": "JKyger@sollicitudin.com",
    "username": "MVaimauga",
    "password": "IDov8"
}, {
    "id": 5,
    "email": "KTierney@risus.net",
    "username": "TDentice",
    "password": "wr7RS"
}];

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