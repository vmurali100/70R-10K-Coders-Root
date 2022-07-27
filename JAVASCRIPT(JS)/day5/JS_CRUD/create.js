var ajay=[
    {
        "id": 3350,
        "email": "EBurnett@rutrum.io",
        "username": "CDayton",
        "password": "tsUev"
    },
    {
        "id": 3351,
        "email": "BDowning@tellus.ly",
        "username": "TCulp",
        "password": "Gnpex"
    },
    {
        "id": 3352,
        "email": "DBuckaloo@magna.net",
        "username": "SCouturier",
        "password": "Zb3TD"
    },
    {
        "id": 3353,
        "email": "JMcdonough@sed.com",
        "username": "AWinder",
        "password": "wujMm"
    },
];
function adduser(){
    var user={
        id:document.getElementById("id").value,
       email:document.getElementById("Email").value,
        username:document.getElementById("username").value,
       password:document.getElementById("Password").value,
    };
    ajay.push(user);
displayusers()
cleartable()
}
