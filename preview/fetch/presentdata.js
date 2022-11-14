var user=[];
api_url=" http://localhost:3000/user";
async function users(){
    var user1=await fetch(api_url);
    user=await user1.json();
    console.log(user)
    users1();
}
users();
function users1(){
    document.querySelector("tbody").innerHTML="";
    for(i=0;i<user.length;i++){
        var mytr=document.createElement("tr");
        document.querySelector("tbody").appendChild(mytr);
        for(a in user[i]){
            var mytd=document.createElement("td");
            mytr.appendChild(mytd);
            mytd.innerHTML=user[i][a];
        };
        var newtd=document.createElement("td");
        var newbutton=document.createElement("button");
        newbutton.setAttribute("class","btn btn-warning");
        newbutton.innerHTML="EDIT";
        newtd.appendChild(newbutton);
        mytr.appendChild(newtd);
        var newtd1=document.createElement("td");
        var newbutton1=document.createElement("button");
        newbutton1.setAttribute("class","btn btn-danger");
        newbutton1.setAttribute("onclick","deleteuser("+i+")")
        newbutton1.innerHTML="DELETE";
        newtd1.appendChild(newbutton1);
        mytr.appendChild(newtd1);
    }
}