var covid19StateWiseDetails = {}
var covid19StateDetailsWithDistricts={} // declare a variable with different name for displaying dist name
function getStateWiseDetails() {
    var api_url = "https://data.covid19india.org/data.json"
    var getCovidDetails = new XMLHttpRequest()
    getCovidDetails.onreadystatechange = function () {
        if (getCovidDetails.readyState == 4 && getCovidDetails.status == 200) {
            covid19StateWiseDetails = JSON.parse(getCovidDetails.response)
            console.log(covid19StateWiseDetails)
            displayStateNames(covid19StateWiseDetails.statewise)
 
        }
    }
    getCovidDetails.open("GET", api_url)
    getCovidDetails.send()
}


function displayStateNames(stateWiseDetails) {
    document.getElementById("cardsArea").innerHTML="" // when we search an state name we should clear the cards area
    stateWiseDetails.forEach((covidDetails, i) => {

        if (covidDetails.state !== "Total") {

            var cardDiv=document.createElement("div") // when we require an div with class
            cardDiv.setAttribute("class","card")
            cardDiv.setAttribute("onclick","getDistrictWiseDetails("+i+")") // when we click on state name it will access details of the particular states

            var cardBody=document.createElement("div");

            var cardHeading=document.createElement("h4") // to display the state name in cardBody
            cardHeading.innerHTML=covidDetails.state;
            cardBody.appendChild(cardHeading)

            cardBody.setAttribute("class","card-body") 

            cardDiv.appendChild(cardBody)

            document.getElementById("cardsArea").appendChild(cardDiv)       
        }
    })
}
getStateWiseDetails() 