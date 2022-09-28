var globalindex=null;
function edituser(index) {
        globalindex=index;
        var newedit=users[index];
        document.getElementById("inputfname").value = newedit.fname,
            document.getElementById("inputlname").value = newedit.lname,
            document.getElementById("inputtel").value = newedit.tel,
            document.getElementById("inputaddress").value = newedit.address,
            document.getElementById("inputcity").value = newedit.city
        document.getElementById("inputstate").value = newedit.state,
            document.getElementById("inputzip").value = newedit.zip
            swapButtons(true);
    };
    function swapButtons(value){
        // console.log(value);
        if(value ===true){
            document.getElementById("signbutton").style.display="none"
            document.getElementById("updatebutton").style.display="block"
        }
        else{
            document.getElementById("signbutton").style.display="block"
            document.getElementById("updatebutton").style.display="none"
        }
    }
    function updateuser(){
        var users8 = {
            fname: document.getElementById("inputfname").value,
            lname: document.getElementById("inputlname").value,
            tel: document.getElementById("inputtel").value,
            address: document.getElementById("inputaddress").value,
            city: document.getElementById("inputcity").value,
            state: document.getElementById("inputstate").value,
            zip: document.getElementById("inputzip").value
    
        };
        swapButtons(false);
        users[globalindex]=users8;
        user1();
    };