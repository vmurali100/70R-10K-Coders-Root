function getDataFromserver() {
    var api_url = "http://localhost:3000/users"
    var getData = new XMLHttpRequest();

    getData.onreadystatechange = function() {
        if (getData.readystate == 4 && getData.status == 200) {
            console.log(getData.response)
            console.log(typeof(getData.response))
                // To convert a string to object
            users = JSON.parse(getData.response);
            console.log(typeof(users))
        }

    };
    getData.open("GET", api_url);
    getData.send()
}
getDataFromserver()