
function deleteuser(globalindex) {
   
       
    var api_url = "http://localhost:3000/one/"
    var delete_url = api_url + one[globalindex].id
    
    fetch(delete_url,{
        method:"DELETE"
    })
    .then(res => getDatafromServer())
}

