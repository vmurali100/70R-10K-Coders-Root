var api_url = "https://dev.api.klaim.yousted.org/api/visitor/store"
var token = "9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"
var temp = {
    ip_address: "90.194.40.83",
    device_type: "Android",
    browser_type: "Chrome",
    user_agent: "Mozilla/5.0 (Linux; Android 10; POT-LX1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Mobile Safari/537.36"
}

var user = {
    visitor_id: null,
    first_name: "",
    last_name: "",
    telephone: null,
    email: "",
    dob: ""
}

var user_id = null;

async function postip() {

    var response = await fetch("https://dev.api.klaim.yousted.org/api/visitor/store", {
        method: "POST",
        body: JSON.stringify(temp),
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"
        }
    })

    console.log(response)
    var data = await response.json()

    console.log(data)

    user.visitor_id = data.data.visitorId

    console.log(user.visitor_id)

}

postip();

// function validate() {
//     var emailvalue = document.getElementById("email").value
//     var phonevalue = document.getElementById("telephone").value

//     var emailpattern = /^\S+@\S+\.\S+$/

//     // var phonepattern = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/

//     var phonepattern = /[0-9]{3}[0-9]{3}[0-9]{4}/

//     if (emailvalue.length > 0 &&
//         phonevalue.length > 0) {
//         document.getElementById("submit_claim").removeAttribute("disabled")
//     }
//     else {
//         document.getElementById("submit_claim").setAttribute("disabled", true)
//     }


//     if (!emailpattern.test(emailvalue) && emailvalue.length > 0) {
//         document.querySelector("#emailerror").style.display = "block"
//     }
//     else {
//         document.querySelector("#emailerror").style.display = "none"
//     }

//     if (!phonepattern.test(phonevalue) && phonevalue.length > 0) {
//         document.querySelector("#phoneerror").style.display = "block"
//     }
//     else {
//         document.querySelector("#phoneerror").style.display = "none"
//     }


// }

function getDOB() {
    var lstDobDay = document.getElementById("lstDobDay").value
    var lstDobMonth = document.getElementById("lstDobMonth").value
    var lstDobYear = document.getElementById("lstDobYear").value
    return lstDobYear + "-" + lstDobMonth + "-" + lstDobDay
}

async function checkDuplicate(userObj) {
    return new Promise(async (resolve,reject)=>{
        var dup_url = "https://dev.api.klaim.yousted.org/api/duplicate-check"
        var payLoad = {
            email: userObj.email,
            telephone: userObj.telephone,
        }
        var response = await fetch(dup_url, {
            method: "POST",
            body: JSON.stringify(payLoad),
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"
            }
        });
        var result = await response.json();
        console.log(result)
        resolve(result)
    });

}

async function validate_01(userObj) {
    var isValid = true;
    for (a in userObj) {
        if (userObj[a] == "" || userObj[a] == null) {
            isValid = false;
        }
    }

    var dupResult = await checkDuplicate(userObj);

    console.log(dupResult);

    if (dupResult.status == "Failed") {
        isValid = false;
    }
    else {
        var apiurl_user = "https://dev.api.klaim.yousted.org/api/user/store"
        var response_user = await fetch(apiurl_user, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json",
                "Authorization": "Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"
            }

        })
        var userDetails = await response_user.json()
        user_id = userDetails.data.userId
        // window.location.href = "page02.html"
        console.log("All values are available or entered",userDetails);
        }

    return isValid;

}



async function handleuser() {
    console.log("I am inside handle user")
    for (a in user) {
        if (a !== "visitor_id" && a !== "dob") {
            user[a] = document.getElementById(a).value
        }
        if (a === "dob") {
            user[a] = getDOB()
        }
    }


    validate_01(user)


}














