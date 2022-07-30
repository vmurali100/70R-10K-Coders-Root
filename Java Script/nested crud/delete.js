function deleteuser(){
    var deleteUrl = api_url+selecteduser.id
    console.log(deleteUrl)
    fetch(deleteUrl,{method:"DELETE"}).then(()=>{getnestedusers()})
}