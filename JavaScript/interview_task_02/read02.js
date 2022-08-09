




async function addAddresses() {
    var allAddresses = []
    var previousAddressElements = document.getElementsByClassName("previousAddress")
    // var payLoad = {
    //     user_id: 5,
    //     previousAddress: {
    //         0: {
    //             prev_address_line1: "",
    //             prev_address_line2: "",
    //             prev_address_line3: ""
    //         },

    //     },
    // }

   
    // console.log(previousAddressElements)
    for (i = 0; i < previousAddressElements.length; i++) {
        allAddresses.push(previousAddressElements[i].value)
    }
    console.log(allAddresses);

    var payLoad = {
        user_id: 5,
        previousAddress: {
            0: {
                prev_address_line1: allAddresses[0],
                prev_address_line2: allAddresses[1],
                prev_address_line3: allAddresses[2]
            },
            1: {
                prev_address_line1: allAddresses[3],
                prev_address_line2: allAddresses[4],
                prev_address_line3: allAddresses[5]
            },
            2: {
                prev_address_line1: allAddresses[6],
                prev_address_line2: allAddresses[7],
                prev_address_line3: allAddresses[8]
            },

        },
    }

    var api_url = "https://dev.api.klaim.yousted.org/api/prev-user/store"

   var response = await fetch(api_url,{
        method:"POST",
        body:JSON.stringify(payLoad),
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer 9ee2a77e8ce49c20bfc020303ebacb58a1ccf26248862bc0726f6fbc361f8f28"
        }
    })

    var result = await response.json()

    console.log(result)
}

