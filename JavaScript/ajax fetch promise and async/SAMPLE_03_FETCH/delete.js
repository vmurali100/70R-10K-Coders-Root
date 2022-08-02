
function fetchdelete(gloind) {

    var api_url = "  http://localhost:3000/photos/"
    deleteurl = api_url + photos[gloind].id
    fetch(deleteurl, {

        method: "DELETE"
    })
}