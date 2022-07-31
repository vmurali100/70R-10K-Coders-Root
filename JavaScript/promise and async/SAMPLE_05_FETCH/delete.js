
function deleteuser(globalindex) {
    var api_url = "http://localhost:3000/users1/"
    
    var delete_url = api_url + users[globalindex].id

    fetch(delete_url,{
        method:"DELETE"
    })
    .then(res=>getDatafromServer())

}