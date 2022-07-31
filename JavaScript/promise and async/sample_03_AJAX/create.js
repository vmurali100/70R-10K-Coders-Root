
function adduser() {

    user={
        albumId: document.getElementById("albumId").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        url: document.getElementById("url").value,
        thumbnailUrl: document.getElementById("thumbnailUrl").value,
    };
    var api_url = "http://localhost:3000/photos"
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

var photos = [];

function getDatafromServer() {

    

    var api_url = "http://localhost:3000/photos/"

    var getData = new XMLHttpRequest()

    getData.onreadystatechange = function() {

        if (getData.readyState == 4 && getData.status == 200) {
            console.log("success")

            photos = JSON.parse(getData.response)

            console.log(typeof(getData.response))

            console.log(photos)

            console.log(typeof(photos))

            console.log("You can now display user")

            displayuser(photos)
        }
    }

    getData.open("GET", api_url)
    getData.send()


}

getDatafromServer()