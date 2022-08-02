
function adduser() {

    var user={
       
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
    var add_user = new XMLHttpRequest();

    add_user.onreadystatechange = function () {
        if (add_user.readyState == 4 && add_user.status == 200) {

            getDatafromServer()

        }
    }
    add_user.open("POST", api_url)
    add_user.setRequestHeader("Content-Type", "application/json")
    add_user.send(JSON.stringify(user))
}

var users = [];

function getDatafromServer() {
      var api_url = "http://localhost:3000/users1/"
      var getData = new XMLHttpRequest()
      getData.onreadystatechange = function() {

        if (getData.readyState == 4 && getData.status == 200) {
            console.log("success")

            users = JSON.parse(getData.response)

            console.log(typeof(getData.response))

            console.log(users)
          

            console.log(typeof(users))

            console.log("You can now display user")

            displayuser(users)

           
        }
    }

    getData.open("GET", api_url)
    getData.send()


}

getDatafromServer()