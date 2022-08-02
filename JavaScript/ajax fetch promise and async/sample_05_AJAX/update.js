var globalindex = null

var users = []

function edituser(index){

    globalindex = index 

    document.getElementById("id").value = users[index].id,
    document.getElementById("name").value = users[index].name,
    document.getElementById("username").value = users[index].username,
    document.getElementById("email").value = users[index].email,
    document.getElementById("address").value = users[index].address,
    document.getElementById("phone").value = users[index].phone,
    document.getElementById("website").value = users[index].website,
    document.getElementById("company").value = users[index].comapny,


    swapbuttons(true)

}

function updateuser() {

    temp1 = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        
        phone: document.getElementById("phone").value,
        website: document.getElementById("website").value,
        company: document.getElementById("company").value,
       };

   var api_url = "http://localhost:3000/users1/"

   var updateduser = new XMLHttpRequest();

   updateduser.onreadystatechange = function () {

       if (updateduser.readyState == 4 && updateduser.status == 200) {

           getDatafromServer()

       }
   }
   updateduser.open("PUT",api_url+users[globalindex].id,temp1)
   updateduser.setRequestHeader("Content-type","application/json")
   updateduser.send(JSON.stringify(temp1))


   swapbuttons(false)
}

function swapbuttons(value) {

    if (value == true) {
        document.getElementById("addBtn").style.display = "none"
        document.getElementById("updateBtn").style.display = "block"
    }
    else {
        document.getElementById("addBtn").style.display = "block"
        document.getElementById("updateBtn").style.display = "none"
    }
}
