function validate (){
    var idvalue = document.getElementById("id").value;
    console.log(idvalue)
    var textpattern=/[a-z]/i
     
// check for id n alphabets

    if(idvalue>0 &&  !textpattern.test(idvalue)){
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
} 