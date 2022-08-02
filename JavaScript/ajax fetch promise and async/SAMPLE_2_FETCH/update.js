var gloind = null;

function fetchupdate() {

    var api_url = "http://localhost:3000/comments/"
    updateurl = api_url + comments[gloind].id

    console.log(updateurl)

    var temp1 = {
        postid : document.getElementById("postid").value,
        id : document.getElementById("id").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        body : document.getElementById("body").value
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

    document.getElementById("postid").value = comments[index].postid
    document.getElementById("id").value = comments[index].id
    document.getElementById("name").value = comments[index].name
    document.getElementById("email").value = comments[index].email
    document.getElementById("body").value = comments[index].body
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


