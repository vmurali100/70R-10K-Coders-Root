var carts = []

function addUser() {

    var cart = {

        id: document.getElementById("id").value,
        userId: document.getElementById("userId").value,
        date: document.getElementById("date").value,
        products: document.getElementById("products").value,
        __v: document.getElementById("__v").value,


    };

    // users[globalIndex] = user;
    // displayUsers();
    // clearform();
    // swapbuttons(false)

    var api_url = "http://localhost:3000/carts/"
    var addUser = new XMLHttpRequest();
    addUser.onreadystatechange = function() {
        if (addUser.readyState == 4 && addUser.status == 200) {
            console.log("user Deleted")
            getDataFromServer()
        }
    }
    addUser.open("POST", api_url);
    addUser.setRequestHeader("Content-Type", "application/json")
    addUser.send(JSON.stringify(cart))
}