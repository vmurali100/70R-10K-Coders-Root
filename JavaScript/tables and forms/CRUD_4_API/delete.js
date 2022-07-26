
function deleteuser(ig){

    api_url = "http://localhost:3000/information/"
    var delete_user = new XMLHttpRequest()

    delete_user.onreadystatechange = function(){
        if(delete_user.readyState == 4 && delete_user.status == 200){
            console.log(delete_user.response)
            
       }
    }
    delete_user.open("DELETE",api_url+information[ig].id)
    delete_user.send()
    getDatafromServer4()
}