var api_url=" http://localhost:3000/user";
// fetch(api_url).then((response)=>{
//     return response.json()
// }).then((a)=>{
//     user=a;
//     console.log(a)
// })
async function users(){
    var user1=await fetch(api_url);
    var user=await user1.json();
    console.log(user)
}
users();