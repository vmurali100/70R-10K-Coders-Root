function validate (){
    var idvalue = document.getElementById("id").value;
    var textpattern=/[a-z]/i
    var emailvalue=document.getElementById("email").value;
    var emailpattern= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i 
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
// check for id n alphabets

    if(idvalue.length>0 &&  !textpattern.test(idvalue) && emailpattern.test(emailvalue) && username.length>2&&password.length>6){
document.getElementById("addBtn").removeAttribute("disabled")
    }
    else{
        document.getElementById("addBtn").setAttribute("disabled",true)  
    }

    // check for alphabets to show error msg

    if (textpattern.test(idvalue)) {
        document.querySelector("p").style.display="block"
    }else
    {
        document.querySelector("p").style.display="none" 
    }
    if (!emailpattern.test(emailvalue) && emailvalue.length>0) {
        document.querySelector("p1").style.display="block"
    }else
    {
        document.querySelector("p1").style.display="none" 
    }
    if (username.length<6) {
        document.querySelector("p2").style.display="block" 
    }else
    {
        document.querySelector("p2").style.display="none" 
    }
    if (password.length<6) {
        document.querySelector("p3").style.display="block" 
    }else
    {
        document.querySelector("p3").style.display="none" 
    }
} 

  