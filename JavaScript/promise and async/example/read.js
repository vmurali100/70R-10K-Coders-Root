
var api_url = "https://jsonplaceholder.typicode.com/users"

function getDatafromServer() {


    var getData = new XMLHttpRequest()

    getData.onreadystatechange = function () {
        if (getData.readyState == 4 && getData.status == 200) {
            console.log(getData.response)
            users = JSON.parse(getData.response)

            console.log(users)
            displayusers();
        }

    }
    getData.open("GET", api_url)
    getData.send()

}



getDatafromServer()


// function handlefetch(){

//     fetch(api_url)
//     .then(response => response.json)

//     .then(data => console.log(data))


// }

async function handlefetchasync() {
    var userdata = await fetch(api_url);
    var users = await userdata.json()
    displayusers(users)
}


fetch(api_url).then((response) => {
    return response.json()
})
    .then((data) => {
        users = data
    });

// handlefetch()
handlefetchasync()

function displayusers() {

    //    for(a in users){
    //     console.log(users[a].email)
    // (users[a].email+"<br>")

    for (i = 0; i < users.length; i++) {



        var list = document.createElement("li")

        ul.appendChild(list)

        list.innerHTML = users[i].email

    }

}





