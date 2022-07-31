
function adduser() {

    var user = {

        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,

        phone: document.getElementById("phone").value,
        website: document.getElementById("website").value,
        company: document.getElementById("company").value,

    };

    var api_url = "http://localhost:3000/users1"

    fetch(api_url, {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" }
    })
    .then(res=>getDatafromServer())
}

var users = [];
var api_url = "http://localhost:3000/users1/"

async function getDatafromServer() {

    var info = await fetch(api_url)
    users = await info.json()

    console.log(users)

    displayuser()

}

getDatafromServer()