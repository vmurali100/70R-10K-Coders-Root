function deleteuser(globalindex){
    var apiurl=" http://localhost:3000/das/"

    var deleteuser=new XMLHttpRequest();
    deleteuser.onreadystatechange=function(){
        if (deleteuser.readyState ==4 && deleteuser.status==200) {
          console.log("user deleted")  
          getdatafromserver()
        }
    }
    deleteuser.open("delete",apiurl+das[globalindex].id);
    deleteuser.send();
}