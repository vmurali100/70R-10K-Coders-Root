var gloind = null;

function fetchupdate() {

    var api_url = "  http://localhost:3000/photos/"
    updateurl = api_url + photos[gloind].id

    console.log(updateurl)

    var temp1 = {
        id1 : document.getElementById("id1").value,
        id : document.getElementById("id").value,
        title : document.getElementById("title").value,
        url : document.getElementById("url").value,
        thumbnailUrl : document.getElementById("thumbnailUrl").value
    }
    fetch(updateurl, {
        method: "PUT",
        body: JSON.stringify(temp1),
        headers: {
            "Content-type": "application/json"
        },
    })

        .then(res => getDatafromServer())
       
    

}

function edituser(index) {


   gloind = index

    document.getElementById("id1").value = photos[index].id1
    document.getElementById("id").value = photos[index].id
    document.getElementById("title").value = photos[index].title
    document.getElementById("url").value = photos[index].url
    document.getElementById("thumbnailUrl").value = photos[index].thumbnailUrl
    swapbuttons(true)


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


