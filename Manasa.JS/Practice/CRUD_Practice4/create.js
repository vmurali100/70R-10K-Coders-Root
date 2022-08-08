var users = [
    {
        "fname" : "Manasa",
        "lname"  : "Ammu"
    },
    {
        "fname" : "Keerthi",
        "lname"  : "Prasanna"
    },
    {
        "fname" : "Prudhvi",
        "lname"  : "Reddy"
    },
    {
        "fname" : "Ramya",
        "lname"  : "Chinni"
    },

]

function addUsers(){
    var user = {
        fname : document.getElementById("fname").value,
        lname : document.getElementById("lname").value,
    };

    users.push(user);
    displayUsers();
    clearTable()

}