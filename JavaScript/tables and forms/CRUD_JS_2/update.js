var ind = null //global index 

function edituser(index){

    ind = index // storing index in global variable for use outside this function
   
    document.getElementById("fname").value=user[ind] .fname
    document.getElementById("lname").value=user[ind].lname
    document.getElementById("mobile").value=user[ind] .mobile
    document.getElementById("city").value=user[ind] .city
    swapbuttons(true)
}

function updateuser(){
    
        user[ind].fname = document.getElementById("fname").value
        user[ind] .lname= document.getElementById("lname").value,
        user[ind].mobile=document.getElementById("mobile").value,
        user[ind].city = document.getElementById("city").value
    
    displayuser();
    clearform();
    swapbuttons(false);

}

function swapbuttons(value){
    if (value == true){
        document.getElementById("updateBtn").style.display="block";
        document.getElementById("addBtn").style.display="none";
     }
     else {
        document.getElementById("updateBtn").style.display="none";
        document.getElementById("addBtn").style.display="block";
     }

    }
