
var users = []
function cleartable() {
    document.getElementById('id').value = ""
    document.getElementById('email').value = ""
    document.getElementById('username').value = ""
    document.getElementById('password').value = ""


}
function displayusers() {
    document.querySelector('tbody').innerHTML = ""
    for (i=0; i < users.length; i++) {
        var myTr = document.createElement('tr')
        for (a in users[i]) {
            var td1 = document.createElement('td')
            td1.innerHTML = users[i][a]
            myTr.appendChild(td1)
        }
        document.querySelector('tbody').appendChild(myTr)
    }
}