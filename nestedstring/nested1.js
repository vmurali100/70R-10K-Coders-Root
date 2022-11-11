nesteduser=[];
svalue={};
var suser=document.getElementById("a");
var api_url=" http://localhost:3000/nesteduser/";
async function users(){
    var user1=await fetch(api_url);
     nesteduser=await user1.json();
    console.log(nesteduser)
    users1();
}
users();
function users1(){
    nesteduser.forEach((A,B)=>{
        var sel=document.querySelector("select");
        var opt =document.createElement("option");
        opt.innerHTML=A.fname;
        sel.appendChild(opt)

    })
};
function users3(){
    selvalue=document.querySelector("select").value;
    svalue=nesteduser.find((A)=>A.fname == selvalue);
    suser.style.display="block";
    document.getElementById("a").innerHTML=JSON.stringify(svalue);
        var user4=document.createElement("Button");
        user4.innerHTML="EDIT"
        suser.appendChild(user4);
        user4.setAttribute("class","btn btn-warning");
        user4.setAttribute("type","button");
        user4.setAttribute("onclick","edituser()");
        var user5=document.createElement("Button");
        user5.innerHTML="DELETE"
        suser.appendChild(user5);
        user5.setAttribute("class","btn btn-danger");
        user5.setAttribute("type","button");
        user5.setAttribute("onclick","deleteuser()");

        
}
function deleteuser(){
    var deleteurl=api_url+svalue.id;
    console.log(deleteurl);
    fetch(deleteurl,{
        method:"DELETE"
    }).then(()=>{
        users();
    })
}
function updateuser(){
    var universe={
        id:document.getElementById("id").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        tel:document.getElementById("tel").value,
        address:document.getElementById("address").value,
        state:document.getElementById("state").value,
        city:document.getElementById("city").value,
        zip:document.getElementById("zip").value
        };
    var updateurl=api_url+svalue.id;
    console.log(updateurl)
    fetch(updateurl,{
        method:"PUT",
        body:JSON.stringify(universe),
        headers:{"Content-Type":"application/json"}
    }).then((res)=>{
        users();
    })
}
function createuser(){
    var users3 = {
        id: document.getElementById("id").value,
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        tel: document.getElementById("tel").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value

    };
    fetch(api_url,{
        method:"POST",
        body:JSON.stringify(users3),
        headers:{"Content-Type":"application/json"}
    }).then((res)=>{
        users();
    })
}
function edituser(){
    newedit=svalue;
    document.getElementById("id").value=newedit.id;
    document.getElementById("fname").value=newedit.fname;
    document.getElementById("lname").value=newedit.lname;
    document.getElementById("tel").value=newedit.tel;
    document.getElementById("address").value=newedit.address;
    document.getElementById("state").value=newedit.state;
    document.getElementById("city").value=newedit.city;
    document.getElementById("zip").value=newedit.zip;
    console.log(svalue);
    document.querySelector("form").style.display="block";
}