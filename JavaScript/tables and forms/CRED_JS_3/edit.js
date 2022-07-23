var gloind = null;

function edituser(index) {

    gloind = index;

    document.getElementById("company").value = user[index].Company
    document.getElementById("model").value = user[index].Model
    document.getElementById("engine").value = user[index].Engine
    document.getElementById("fueltype").value = user[index].Fueltype

    swapbuttons(true)

}

function updateuser() {

    user[gloind].Company = document.getElementById("company").value
    user[gloind].Model = document.getElementById("model").value
    user[gloind].Engine = document.getElementById("engine").value
    user[gloind].Fueltype = document.getElementById("fueltype").value

    displayuser()

    clearform()

    swapbuttons(false)
}

function clearform() {
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
