var apiurl = "https://dev.api.klaim.yousted.org/api/visitor/store"
var token = "9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"
var headeroptions = {
    "content-type": "application/json",
    // "x-my-custom-header":"valve-v",
    "Authorization": "Bearer" + token,
}
async function senddeviceinformation() {
    var payload = {
        ip_address: "90.194.40.83",
        device_type: "Android",
        browser_type: "Chrome",
        user_agent: "Mozilla/5.0 (Linux; Android 10; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36",
    }
    var response = await fetch(apiurl, {
        method:"POST",
        headers:headeroptions,
        body: JSON.stringify(payload)

    })
    var data = await response.json()
    console.log(data)

    user.visitor_id = data.data.visitorId

    console.log(user.visitor_Id)
}
senddeviceinformation()