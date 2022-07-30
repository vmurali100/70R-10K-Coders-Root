function createuser(){
    fetch(api_url,{method:"POST",body:JSON.stringify(newuser),Headers:{"Content-Type":"application/json"}})
    .then((res)=>{getnestedusers()})
}