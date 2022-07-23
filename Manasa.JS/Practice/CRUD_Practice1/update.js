var globalIndex =null 

function edituser(index){

    globalIndex = index 
   
    document.getElementById("fname").value=users[index] .fname
    document.getElementById("lname").value=users[index].lname
    document.getElementById("address").value=users[index] .address
    document.getElementById("city").value=users[index] .city
    document.getElementById("state").value=users[index] .state
    document.getElementById("zip").value=users[index] .zip
    swapbuttons(true)
}

function updateuser(){

    var user = {
    
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        zip: document.getElementById("zip").value,

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