function editUser(){
    console.log(selectedUser)
    document.querySelector("form").style.display="block"
}
function udpateUSer(){
    var updateUrl = api_url+selectedUser.id
    fetch(updateUrl,{
        method:"PUT",
        body:JSON.stringify(newUser),
        headers:{"Content-Type":"application/json"}
    }).then((res)=>{
        getNestedUsers()
    })
}