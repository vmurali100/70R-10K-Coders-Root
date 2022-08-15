var apiUrl = "https://dev.api.klaim.yousted.org/api/visitor/store";

var token = "9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"

var headersOptions = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token
};


var user = {
    visitor_id: null,
    first_name: '',
    last_name: '',
    telephone: null,
    email: '',
    dob: ''
}

var user_id = null

async function sendDeviceInfo() {

    var payLoad = {

        ip_address: "90.194.40.83",
        device_type: "Android",
        browser_type: "Chrome",
        user_agent: "Mozilla/ 5.0(Linux; Android 10; POT - LX1) AppleWebKit / 537.36(KHTML, like Gecko) Chrome / 103.0.0.0 Mobile Safari / 537.36"
    }

    var response = await fetch(apiUrl, {
        method: "POST",
        headers: headersOptions,
        body: JSON.stringify(payLoad)
    })
    var data = await response.json()

    console.log(data);
    user.visitor_id = data.data.visitorId

}
sendDeviceInfo()




function getDob() {
    var lstDobDay = document.getElementById("lstDobDay").value
    var lstDobMonth = document.getElementById("lstDobMonth").value
    var lstDobYear = document.getElementById("lstDobYear").value

    return lstDobYear + "-" + lstDobMonth + "-" + lstDobDay

}


function validate(userObj) {
    var isValid = true;
    for (a in userObj) {
        if (userObj[a] == "" || userObj[a] == null) {
            isValid = false
        }
    }
    return isValid
}

async function handleSubmit() {
    console.log("handle submit is called")
    for (a in user) {
        if (a !== "visitor_id" && a !== "dob") {
          user[a]=document.getElementById(a).value
        }
        if (a == "dob") {
            user[a] = getDob()
        }
    }
    if (validate(user)) {
        var response = await fetch("https://dev.api.klaim.yousted.org/api/user/store", {
            method: "POST",
            headers: "headersOptions",
            body: JSON.stringify(user)
        })
        var userDetails = await response.json()
        user_id = userDetails.data.userId
        window.location.href = "page02.html"
        console.log("all values are available", response)
    }
    else {
        console.log("some values are missing");
    }

}
