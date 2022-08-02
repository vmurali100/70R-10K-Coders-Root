function edituser() {
    document.getElementById("id").value = selectedItem.id
    document.getElementById("title").value = selectedItem.title
    document.getElementById("price").value = selectedItem.price
    document.getElementById("description").value = selectedItem.description
    document.getElementById("category").value = selectedItem.category
    document.getElementById("image").value = selectedItem.image
    document.getElementById("rating").value = selectedItem.rating.rate
    swapbuttons(true)
}

function swapbuttons(value) {
    if (value == true) {
        document.getElementById("addBtn").style.display = "none"
        document.getElementById("updateBtn").style.display = "block"
    }
    else {
        document.getElementById("addBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    }
}

function updateuser() {

    temp = {

        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        image: document.getElementById("image").value,
        rating:document.getElementById("rating").value

    }
    var api_url = "http://localhost:3000/items/"
    var update_user = new XMLHttpRequest()

    update_user.onreadystatechange = function(){
        if(update_user.readyState==4 && update_user.status==200){
            getDatafromServer()
        }
    }
    update_user.open("PUT",api_url+selectedItem.id,temp)
    update_user.setRequestHeader("Content-Type","application/json")
    update_user.send(JSON.stringify(temp))


}