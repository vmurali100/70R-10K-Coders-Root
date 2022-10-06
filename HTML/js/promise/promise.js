var user = []
function serverdata() {
    var api_url = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true";
    var getdata = new XMLHttpRequest();
    getdata.onreadystatechange = function () {
        if (getdata.readyState === 4 && getdata.status === 200) {
            console.log(getdata.response)
            user = JSON.parse(getdata.response)
            console.log(user)
        }
    }
    getdata.open("GET", api_url);
    getdata.send();
}
serverdata()