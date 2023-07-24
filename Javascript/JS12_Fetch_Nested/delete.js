function deleteUser(){
    var deleteUrl = api_url+selectedUser.id;
    console.log(deleteUrl);
    fetch(deleteUrl,{
        method:"DELETE"
    }).then(()=>{
        getNestedUsers()
    })
}