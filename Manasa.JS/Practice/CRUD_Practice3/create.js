var users=[
    {
        "id": 116,
        "email": "ASeymour@tempor.com",
        "username": "SRydinsky",
        "password": "7nzmh"
    },
    {
        "id": 117,
        "email": "RWelsh@hendrerit.ly",
        "username": "PDellinger",
        "password": "lhxWX"
    },
    {
        "id": 118,
        "email": "DEmerson@augue.org",
        "username": "MHolben",
        "password": "YdwnM"
    },
    {
        "id": 119,
        "email": "NShafer@curabitur.gov",
        "username": "CSnow",
        "password": "tOiLd"
    },
    {
        "id": 120,
        "email": "JSuesskind@et.ly",
        "username": "LKem",
        "password": "Gg26F"
    },
];
function adduser(){
    var user={
        id:document.getElementById("id").value,
       email:document.getElementById("Email").value,
        username:document.getElementById("username").value,
       password:document.getElementById("Password").value,
    };

    user.push(user);
    displayusers()
  cleartable()
}