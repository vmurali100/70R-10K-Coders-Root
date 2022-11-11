var user=[];
function users(users1){
    var api_url="http://localhost:3000/user";
    var user1= new XMLHttpRequest();
    user1.onreadystatechange=function(){
        if(user1.readyState==4 && user1.status==200){
            user=JSON.parse(user1.response);
            console.log(user)
            users1();
        }
    }
    user1.open("GET",api_url);
    user1.send();
}
function users1(){
    user.map((data)=>{
        return console.log(data);
    });
}
users(users1);