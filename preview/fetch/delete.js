function deleteuser(){
    var delete_url=api_url;
    console.log(delete_url)
    fetch(delete_url,{
        method:"DELETE"
    }).then(()=>{
        users();
    })
}