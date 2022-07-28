var gloind = null;

function edituser(index) {

    gloind = index;
    
    document.getElementById("id").value = car[index].id
    document.getElementById("company").value = car[index].Company
    document.getElementById("model").value = car[index].Model
    document.getElementById("engine").value = car[index].Engine
    document.getElementById("fueltype").value = car[index].Fueltype

    swapbuttons(true)

}

function updateuser() {

    car[gloind].id = document.getElementById("id").value
    car[gloind].Company = document.getElementById("company").value
    car[gloind].Model = document.getElementById("model").value
    car[gloind].Engine = document.getElementById("engine").value
    car[gloind].Fueltype = document.getElementById("fueltype").value

    api_url = "http://localhost:3000/car/"
    var update_user = new XMLHttpRequest()

    update_user.onreadystatechange = function(){
        if(update_user.readyState == 4 && update_user.status==200){

            console.log("user updated successfully")

            update_userfromServer3();
          

      
}
    update_user.open("PUT",api_url+car[gloind].id,car[gloind])
    update_user.getResponseHeader("Content-Type","application/json")
    update_user.send(JSON.stringify(car[gloind]))

    swapbuttons(false)
    clearform()

}

function clearform() {
    document.getElementById("id").value = ""
    document.getElementById("company").value = ""
    document.getElementById("model").value = ""
    document.getElementById("engine").value = ""
    document.getElementById("fueltype").value = ""
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
