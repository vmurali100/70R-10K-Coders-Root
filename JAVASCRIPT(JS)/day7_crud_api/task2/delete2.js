function deleteuser(globalindex){
    var apiurl="http://localhost:3000/sip/ "

    var deleteuser=new XMLHttpRequest();
    deleteuser.onreadystatechange=function(){
        if (deleteuser.readyState ==4 && deleteuser.status==200) {
          console.log("user deleted")  
          getdatafromserver()
        }
    }
    deleteuser.open("delete",apiurl+sip[globalindex].id);
    deleteuser.send();
}