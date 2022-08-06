var user
function adduser() {
     user =  
    {
        
            "id": "226",
            "fname": "Forest",
            "lname": "Glean",
            "tel": "(817)230-7188",
            "address": "3211 Mattis Ct",
            "city": "Liberty",
            "state": "FLorida",
            "zip": "97884"
          }          
    
        }
    



function displayusers(){
    // console.log(user)
    // document.write(user) 
    for(a in user){
      document.write(user[a]) 
    }
}
adduser()
displayusers()
