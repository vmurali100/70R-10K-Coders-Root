var users = [

    {
        "id": 1,
        "email": "KHensley@vel.org",
        "username": "kirthi",
        "password": "jEHlV"
    },
    {
        "id": 2,
        "email": "BDaniello@at.ly",
        "username": "DGuilfoyle",
        "password": "fdOx2"
    },
    {
        "id": 3,
        "email": "SPointelin@ipsum.org",
        "username": "MHydle",
        "password": "z4aRt"
    }

]

function addUser() {
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    };

    users.push(user);
    displayUsers();
    clearTable()
}
