function deleteUser(i){
    var api_url ="http://filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"

    var deleteUser = new XMLHttpRequest();
    deleteUser.onreadystatechange= function(){
        if(deleteUser.readyState == 4 && deleteUser.status == 200){
            console.log("User Deleted")
        }
    }
    deleteUser.open("DELETE",api_url+users[i].id);
    deleteUser.send()
}