
var indexglobal = null

function edituser(index){

   indexglobal =  index

    document.getElementById("id").value = employee[index].id;
     document.getElementById("fname").value = employee[index].fname;
     document.getElementById("lname").value = employee[index].lname;
     document.getElementById("telephone").value = employee[index].telephone;
     document.getElementById("address").value = employee[index].address;
     document.getElementById("city").value = employee[index].city;
     document.getElementById("state").value = employee[index].state;
     document.getElementById("zip").value = employee[index].zip;
  

     swapbuttons(true)
}

function updateuser(){

    employee[indexglobal].id = document.getElementById("id").value;
    employee[indexglobal].fname = document.getElementById("fname").value;
    employee[indexglobal].lname = document.getElementById("lname").value;
    employee[indexglobal].telephone = document.getElementById("telephone").value;
    employee[indexglobal].address =  document.getElementById("address").value;
    employee[indexglobal].city = document.getElementById("city").value;
    employee[indexglobal].state = document.getElementById("state").value; 
    employee[indexglobal].zip = document.getElementById("zip").value;
 
   

    var api_url = "http://localhost:3000/employee/"
    
    var update_user = new XMLHttpRequest()

    update_user.onreadystatechange = function(){
        if(update_user.readyState == 4 && update_user.status == 200){
            console.log(update_user.response)
            getDatafromServer5()
        }

    }
          update_user.open("PUT",api_url+employee[indexglobal].id,employee[indexglobal]) 
          update_user.setRequestHeader("Content-Type","application/json")
          update_user.send(JSON.stringify(employee[indexglobal]))

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