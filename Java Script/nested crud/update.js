




function updateuser(){
    var updateUrl = api_url+selecteduser.id
    fetch(updateUrl,{method:"PUT",body:JSON.stringify(newuser),Headers:{"Content-Type":"application/json"}})
    .then((res)=>{getnestedusers()})
}