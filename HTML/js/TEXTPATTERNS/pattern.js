function user() {
    var users = document.getElementById("name").value;
    var users1 = /[0-9]/i
    users1.test(users)
    var users2 = document.getElementById("email").value;
    var users3 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i
    users3.test(users2)
    var users4 = document.getElementById("telephone").value;
    var users5 = /[a-z]/i
    users5.test(users4)
    var users6 = document.getElementById("address").value;
    var users7 = /[@,#]/i
    users7.test(users6)
    var users8 = document.getElementById("city").value;
    var users9 = /[0-9]/i
    users9.test(users8)
    var users10 = document.getElementById("state").value;
    var users11 = /[0-9]/i
    users11.test(users10)
    var users12 = document.getElementById("pincode").value;
    var users13 = /[a-z]/i
    users13.test(users12)
    if (users.length > 0 && !users1.test(users) && users3.test(users2) && users4.length > 9 && !users5.test(users4) && users6.length > 10 && !users7.test(users6) && users8.length > 0 && !users9.test(users8) && users10.length > 0 && !users11.test(users10) && users12.length>5 && !users13.test(users12)) {
        document.getElementById("signbutton").removeAttribute("disabled");
    } else {
        document.getElementById("signbutton").setAttribute("disabled", true);
    }
    if(users1.test(users)){
        document.getElementById("namestyle").style.display="block";
    }else{
        document.getElementById("namestyle").style.display="none";
    }
    if(users2.length>0 && !users3.test(users2)){
        document.getElementById("emailstyle").style.display="block";
    }else{
        document.getElementById("emailstyle").style.display="none";
    }
    if(users4.length>0 && users4.length<10){
        document.getElementById("telephonestyle").style.display="block";
    }else{
        document.getElementById("telephonestyle").style.display="none";
    }
    if(users7.test(users6)){
        document.getElementById("addressstyle").style.display="block";
    }else{
        document.getElementById("addressstyle").style.display="none";
    }
    if(users9.test(users8)){
        document.getElementById("citystyle").style.display="block";
    }else{
        document.getElementById("citystyle").style.display="none";
    }
    if(users11.test(users10)){
        document.getElementById("statestyle").style.display="block";
    }else{
        document.getElementById("statestyle").style.display="none";
    }
    if( users12.length<5 && users12.length>0 ){
        document.getElementById("pincodestyle").style.display="block";
    }else{
        document.getElementById("pincodestyle").style.display="none";
    }
}