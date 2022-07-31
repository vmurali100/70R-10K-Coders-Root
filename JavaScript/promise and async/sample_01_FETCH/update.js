var gloind = null;

function edituser(index) {

    gloind = index;


    document.getElementById("id").value = posts[index].id
    document.getElementById("title").value = posts[index].title
    document.getElementById("body").value = posts[index].body


    swapbuttons(true)

}

function updateuser() {

    temp = {

        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        body: document.getElementById("body").value

    };



    api_url = "http://localhost:3000/posts/"

    update_url = api_url + posts[gloind].id

    console.log(update_url)

    fetch(update_url, {
        method: "PUT",
        body: JSON.stringify(temp),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => getDatafromServer())

    swapbuttons(false)
    clearform()
}





function clearform() {

    document.getElementById("id").value = ""
    document.getElementById("title").value = ""
    document.getElementById("body").value = ""

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
