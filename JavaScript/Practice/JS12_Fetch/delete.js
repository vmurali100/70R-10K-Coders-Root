function deleteUser(){
    var deleteUrl = api_url+selectedUser.id;
    fetch(deleteUrl,{
        method:"DELETE",
        body:JSON.stringify(response),
        headers:{"Content-Type":"application/json"}
    }).then((response)=>{
        getnestedUsers()
    })
}