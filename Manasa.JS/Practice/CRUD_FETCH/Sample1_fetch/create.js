
function addUser() {
    
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    var users = [];
        var api_url = "http://localhost:3000/users/";


        //fetch(api_url) //need to use .then twice when ever we use fetch
        // .then((response) => { //always returns promise
        //return response.json()
        //})
        //.then((data) => {
        // console.log(data)
        // })

        async function handleFetchAsync() {
            var usersInfo = await fetch(api_url) //1st then
            var users = await usersInfo.json(); //2nd then
            console.log(users)
        }


        handleFetchAsync() //ajax,fetch,async await
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    // var api_url="http://localhost:3000/users/"
    // var addUser = new XMLHttpRequest();
    // addUser.onreadystatechange = function () {
    //     if (addUser.readyState == 4 && addUser.status == 200){
    //         getDataFromServer()
    //     }
    // }
//     addUser.open("POST",api_url);
//     addUser.setRequestHeader("Content-Type","application/json")

//     addUser.send(JSON.stringify(user))
// }
    }