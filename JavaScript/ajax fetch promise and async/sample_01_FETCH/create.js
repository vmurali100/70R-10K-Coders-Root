

function adduser() {

    var temp = {
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        body: document.getElementById("body").value,
    };

    var api_url = "http://localhost:3000/posts"

    fetch(api_url, {
        method: "POST",
        body: JSON.stringify(temp),
        headers:
            { "Content-Type": "application/json" }
    })

    .then(res => getDatafromServer())


}



