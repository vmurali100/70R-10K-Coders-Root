function users(){
    return new Promise((resolve,reject)=>{
        var api_url="http://localhost:3000/user";
        var user1=new XMLHttpRequest();
        user1.onreadystatechange=function(){
            if(user1.readyState==4 && user1.status==200){
                user=JSON.parse(user1.response)
                resolve(user);
                reject();
            }
        }
        user1.open("GET",api_url);
        user1.send()
    })
}
function users1(user){
    console.log(user)
}
async function users2(){
    var user=await users();
    users1(user);
}
users2();