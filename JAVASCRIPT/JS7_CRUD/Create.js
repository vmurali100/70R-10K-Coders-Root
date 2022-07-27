var users = [
    {
        id: 1,
        email: "srikanthchokkalla@gmail.com",
        username: "srikanthCh",
        password: "12345"
    },
];
function addUser() {
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
    }
    users.push(user);
    displayUsers()
    clearTable()
}

