
var covid19StateWiseDetails = {};


function getStateWiseDetails() {

    var api_url = "https://data.covid19india.org/data.json"

    var getCovidDetails = new XMLHttpRequest()

    getCovidDetails.onreadystatechange = function () {
        if (getCovidDetails.readyState == 4 && getCovidDetails.status == 200) {
            covid19StateWiseDetails = JSON.parse(getCovidDetails.response)
            console.log(covid19StateWiseDetails)
            console.log(typeof (covid19StateWiseDetails))
            console.log(typeof (covid19StateWiseDetails.statewise))
            displayStateNames(covid19StateWiseDetails.statewise)
        }
    }
    getCovidDetails.open("GET", api_url)
    getCovidDetails.send()
}

getStateWiseDetails()


function displayStateNames(statewiseDetails) {
    document.getElementById("cardsarea").innerHTML = ""

    statewiseDetails.forEach((covidDetails, i) => {
        if (covidDetails.state !== "Total") {
           
            var cardDiv = document.createElement("div")
            cardDiv.setAttribute("class", "card")
            cardDiv.setAttribute("onclick","getDistrictWiseDetails("+i+")")
            var cardbody = document.createElement("div")
            cardbody.setAttribute("class", "card-body")
            var cardHeading = document.createElement("h4")
            cardHeading.innerHTML = covidDetails.state
            cardbody.appendChild(cardHeading)
            cardDiv.appendChild(cardbody)
            document.getElementById("cardsarea").appendChild(cardDiv)
        }
    })
}

