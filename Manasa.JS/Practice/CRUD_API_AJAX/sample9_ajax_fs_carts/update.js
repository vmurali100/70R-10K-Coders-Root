var globalIndex = null;

function editUser(index) {
    globalIndex = index;

    var newUser = carts[index];

    document.getElementById("id").value = newUser.id
    document.getElementById("userId").value = newUser.userId
    document.getElementById("date").value = newUser.date
    document.getElementById("products").value = newUser.products
    document.getElementById("__v").value = newUser.__v

    swapButton(true)
}

function swapButton(value) {
    if (value === true) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    } else {
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}

function updateuser() {

    var cart = {
        id: document.getElementById("id").value,
        userId: document.getElementById("userId").value,
        date: document.getElementById("date").value,
        products: document.getElementById("products").value,
        __v: document.getElementById("__v").value,


    };

    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url = "http://localhost:3000/carts/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function() {
        if (updateUser.readyState == 4 && updateUser.status == 200) {
            getDataFromServer()
        }
    }
    updateUser.open("PUT", api_url + carts[globalIndex].id, cart);
    updateUser.setRequestHeader("Content-Type", "application/json")

    updateUser.send(JSON.stringify(cart))

    swapButton(false)
    clearform()
}

function clearform() {
    document.getElementById("id").value = " "
    document.getElementById("userId").value = " "
    document.getElementById("date").value = " "
    document.getElementById("products").value = " "
    document.getElementById("__v").value = " "
}
