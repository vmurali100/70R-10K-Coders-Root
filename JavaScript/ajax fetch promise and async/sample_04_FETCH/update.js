var gloind = null



function fetchupdate() {

    var api_url = "http://localhost:3000/todos/"

    updateurl = api_url + todos[gloind].id

    console.log(updateurl)

    var temp1 = {
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value
    }

    fetch(updateurl, {
        method: "PUT",
        body: JSON.stringify(temp1),
        headers: {
            "Content-type": "application/json"
        },
    })
        .then(res => getuserdata())

}



function edituser(index) {

    gloind = index

    document.getElementById("id").value = todos[index].id
    document.getElementById("title").value = todos[index].title
    document.getElementById("completed").value = todos[index].completed

}