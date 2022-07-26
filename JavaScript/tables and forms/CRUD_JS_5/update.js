
var indexglobal = null

function edituser(index){

   indexglobal =  index

     document.getElementById("fname").value = users[index].fname;
     document.getElementById("lname").value = users[index].lname;
     document.getElementById("telephone").value = users[index].telephone;
     document.getElementById("address").value = users[index].address;
     document.getElementById("city").value = users[index].city;
     document.getElementById("state").value = users[index].state;
     document.getElementById("zip").value = users[index].zip;
  

     swapbuttons(true)
}

function updateuser(){

    users[indexglobal].fname = document.getElementById("fname").value;
    users[indexglobal].lname = document.getElementById("lname").value;
    users[indexglobal].telephone = document.getElementById("telephone").value;
    users[indexglobal].address =  document.getElementById("address").value;
    users[indexglobal].city = document.getElementById("city").value;
    users[indexglobal].state = document.getElementById("state").value; 
    users[indexglobal].zip = document.getElementById("zip").value;
 
   

    displayuser() 

    clearform()

    swapbuttons(false)


}

function swapbuttons(value) {

    if (value == true) {
        document.getElementById("addBtn").style.display = "none"
        document.getElementById("updateBtn").style.display = "block"
    }
    else {
        document.getElementById("addBtn").style.display = "block"
        document.getElementById("updateBtn").style.display = "none"
    }
}