
var users = []
function adduser() {
    var user = {
        id: document.getElementById('id').value,
        email: document.getElementById('email').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,

    }
    users.push(user)
    displayusers()
    cleartable()
}