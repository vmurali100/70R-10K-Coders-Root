function getDataFromServer(){
    var api_url ="http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    var getData = new XMLHttpRequest();

    getData.onreadystatechange = function(){
        if(getData.readyState == 4 && getData.status == 200){
            console.log(getData.response)
        }
    }
    getData.open("GET",api_url);
    getData.send()
}