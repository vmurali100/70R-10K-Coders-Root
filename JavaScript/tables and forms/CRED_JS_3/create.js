


var user = [
    {
        Company: "Hynuda",
        Model: "Santro",
        Engine: "1100cc",
        Fueltype: "Petrol",
    },
    {
        Company: "Maruthi",
        Model: "Swift",
        Engine: "1100cc",
        Fueltype: "Diesel",
    },
    {
        Company: "Tata",
        Model: "Tiago",
        Engine: "1100cc",
        Fueltype: "Petrol",
    },

]

function adduser(){

    temp = {
   
       company  : document.getElementById("company").value,
       model    : document.getElementById("model").value,
       engine   : document.getElementById("engine").value,
       fueltype : document.getElementById("fueltype").value,
   }
   
   user.push(temp)
   
   displayuser()
   clearform()
   
   }
   

