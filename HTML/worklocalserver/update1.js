var globalindex=null;
function edituser(index){
    globalindex=index;
    var newedit=user[index];
    document.getElementById("fname").value=newedit.fname;
    document.getElementById("lname").value=newedit.lname;
    document.getElementById("tel").value=newedit.tel;
    document.getElementById("address").value=newedit.address;
    document.getElementById("state").value=newedit.state;
    document.getElementById("city").value=newedit.city;
    document.getElementById("zip").value=newedit.zip;
    swapButtons(true);
}
function updateuser(){
    var universe={
    fname:document.getElementById("fname").value,
    lname:document.getElementById("lname").value,
    tel:document.getElementById("tel").value,
    address:document.getElementById("address").value,
    state:document.getElementById("state").value,
    city:document.getElementById("city").value,
    zip:document.getElementById("zip").value
    }
user[globalindex]=universe;
users();
swapButtons(false);
}