var user = [
    {
        "id": 79,
        "email": "MAlua@porttitor.gov",
        "username": "WGumatay",
        "password": "PzCr8"
    },
    {
        "id": 80,
        "email": "MDunn@odio.ly",
        "username": "GNewby",
        "password": "lLTfS"
    },
    {
        "id": 81,
        "email": "FRichards@morbi.ly",
        "username": "KGutsteinberg",
        "password": "jP5TZ"
    },
    {
        "id": 82,
        "email": "JYarber@at.org",
        "username": "PRoos",
        "password": "0Uu1i"
    },
    {
        "id": 83,
        "email": "SThomad@sagittis.io",
        "username": "RLangfeldt",
        "password": "3u1gG"
    },
    {
        "id": 84,
        "email": "AJayn@quis.gov",
        "username": "LPacheco",
        "password": "aR9ls"
    },
    {
        "id": 85,
        "email": "CYuan@malesuada.ly",
        "username": "MCoates",
        "password": "Bn4Yn"
    },
    {
        "id": 86,
        "email": "JRollins@hendrerit.org",
        "username": "SMerritt",
        "password": "alYoc"
    },
    {
        "id": 87,
        "email": "FRichards@elementum.net",
        "username": "MHaugland",
        "password": "t7U0K"
    },
    {
        "id": 88,
        "email": "KElbattah@magna.gov",
        "username": "KIngle",
        "password": "XNRHI"
    },
];
function dataserver(){
    var hyperdata=new XMLHttpRequest();
    hyperdata.onreadystatechange=function(){
        if(hyperdata.readyState==4 && hyperdata.status==200){
            console.log(hyperdata.response)
        }
    }
    hyperdata.open(user);
    hyperdata.send();
}
dataserver();