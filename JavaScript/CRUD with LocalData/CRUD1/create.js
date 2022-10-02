
var users =[
    {
        "id": 445,
        "email": "APearlstein@tempor.gov",
        "username": "SHaglund",
        "password": "Kp75QA8R"
    },
    {
        "id": 446,
        "email": "EPaderanga@amet.io",
        "username": "YBednarsh",
        "password": "L5obyapi"
    },
    {
        "id": 447,
        "email": "DOrellana@nullam.ly",
        "username": "KBand",
        "password": "ZHASxn7S"
    },
    {
        "id": 448,
        "email": "AHist@risus.ly",
        "username": "GPuri",
        "password": "I5bDuCaX"
    },
    {
        "id": 449,
        "email": "PNabors@dolor.gov",
        "username": "EPsarros",
        "password": "ALe0Vbnx"
    },
    {
        "id": 450,
        "email": "SPalmer@sit.org",
        "username": "BCrete",
        "password": "Aev9KU7n"
    },
];

function addUser(){
    var user={
        id:document.getElementById("id").value,
        email:document.getElementById("email").value,
        username:document.getElementById("username").value,
        password:document.getElementById("password").value,
    }
    users.push(user);
    displayUsers();
    clearForm();
    
}
console.log(users)
