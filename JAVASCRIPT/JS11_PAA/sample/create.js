function getDataFromServer(displayUsers) {
    var api_url = "http://localhost:3000/user";
    var getData = new XMLHttpRequest();

    getData.onreadystatechange = function () {
        if (getData.readyState == 4 && getData.status == 200) {
            users = JSON.parse(getData.response);
            console.log(users);
        }
    };
    getData.open("GET", api_url);
    getData.send();
}