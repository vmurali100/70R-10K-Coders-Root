function deleteuser(gloind) {

    var api_url = "http://localhost:3000/posts/"

    var delete_url = api_url + posts[gloind].id

    console.log(delete_url)

    fetch(delete_url, {
        method: "DELETE"
    })

    .then(res=>getDatafromServer())

}