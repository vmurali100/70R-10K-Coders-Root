var globalIndex =null 

function edituser(index){

    globalIndex = index 
   
    document.getElementById("Age").value=users[index] .Age
    document.getElementById("Email").value=users[index].Email
    document.getElementById("HomeTown").value=users[index].HomeTown
    document.getElementById("Name").value=users[index] .Name
    document.getElementById("Gender").value=users[index] .Gender
    swapbuttons(true)
}

function updateuser(){

    var user = {
    
        
        Age: document.getElementById("Age").value,
        Email: document.getElementById("Email").value,
        HomeTown: document.getElementById("HomeTown").value,
        Name: document.getElementById("Name").value,
        Gender: document.getElementById("Gender").value,
       

    };

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