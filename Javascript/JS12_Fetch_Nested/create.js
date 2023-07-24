function createUser(){
    fetch(api_url,{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{"Content-Type":"application/json"}
    }).then((res)=>{
        getNestedUsers()
    })
}