var apiUrl = "https://dev.api.klaim.yousted.org/api/visitor/store";
var token = "9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"
var headersOtions = {
    "Content-Type ": "application/json ",
    Authorization: " Bearer" + token,
};
async function sendDeviceInformation() {
    var payLoad = {

        ip_address: "90.194.40.83",
        device_type: "Android",
        browser_type: "Chrome",
        user_agent: "Mozilla/5.0 (Linux; Android 10; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36"

    }

    var response = await fetch(apiUrl, {
        method: "POST",
        headers: headersOtions,
        body: JSON.stringify(payLoad),
    })
    var data = await response.json()

    console.log(data);
}
sendDeviceInformation();



function handleSubmit() {
    console.log("handleSubmit")
}