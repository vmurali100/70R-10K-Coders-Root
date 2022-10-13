var user=[];
function users(){
    var api_url="http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state{usState|abbr}&zip={zip}&pretty=true";
    var data=new XMLHttpRequest();
    data.onreadystatechange=function(){
        if(data.readyState==4 && data.status==200){
            console.log(data.response)
            user=JSON.parse(data.response)
            console.log(user)
        }
    }
    data.open("GET",api_url);
    data.send();
}
users();