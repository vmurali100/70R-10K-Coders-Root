var api_url = "http://localhost:3000/nestedusers/"
var singleelement = document.querySelector("#singleuser")
var nestedusers = []

async function getnestedusers() {
    var response = await fetch(api_url)
    nestedusers = await response.json()
    console.log(nestedusers)
    displayusers()
}
getnestedusers()

function displayusers() {
    var selectelement = document.querySelector("select")
    nestedusers.forEach((user, i) => {
        var opt = document.createElement("option")
        opt.innerHTML = user.username
        selectelement.appendChild(opt)
    })
}
function displaysingleuser() {
    var svalue = document.querySelector("select").value
    
    var selecteduser = nestedusers.find((user) => user.username == svalue)
    singleelement.style.display = "block"
    singleelement.innerHTML = JSON.stringify(selecteduser)


}