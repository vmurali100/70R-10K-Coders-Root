var globalIndex = null;

function editUser(index) {
    globalIndex = index;

    var newUser = products[index];

    document.getElementById("id").value = newUser.id
    document.getElementById("title").value = newUser.title
    document.getElementById("price").value = newUser.price
    document.getElementById("description").value = newUser.description
    document.getElementById("category").value = newUser.category
    document.getElementById("image").value = newUser.image
    document.getElementById("rating").value = newUser.rating

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

    var product = {

        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        image: document.getElementById("image").value,
        rating: document.getElementById("rating").value,
    };

    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url = "http://localhost:3000/products/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function() {
        if (updateUser.readyState == 4 && updateUser.status == 200) {
            getDataFromServer()
        }
    }
    updateUser.open("PUT", api_url + products[globalIndex].id, product);
    updateUser.setRequestHeader("Content-Type", "application/json")

    updateUser.send(JSON.stringify(product))

    swapButton(false)
    clearform()
}

function clearform() {
    document.getElementById("id").value = ""
    document.getElementById("title").value = " "
    document.getElementById("price").value = " "
    document.getElementById("description").value = " "
    document.getElementById("category").value = " "
    document.getElementById("image").value = " "
    document.getElementById("rating").value = " "
}