
function adduser() {

    user={
       
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value,
        
    };
    
    var api_url = "http://localhost:3000/todos"
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

var todos = [];

function getDatafromServer() {
      var api_url = "http://localhost:3000/todos/"
      var getData = new XMLHttpRequest()
      getData.onreadystatechange = function() {

        if (getData.readyState == 4 && getData.status == 200) {
            console.log("success")

            todos = JSON.parse(getData.response)

            console.log(typeof(getData.response))

            console.log(todos)

            console.log(typeof(todos))

            console.log("You can now display user")

            displayuser(todos)
        }
    }

    getData.open("GET", api_url)
    getData.send()


}

getDatafromServer()