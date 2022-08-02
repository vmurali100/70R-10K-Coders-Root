function getDistrictWiseDetails(i) {
    var api_url = "https://data.covid19india.org/state_district_wise.json"
    var getCovidDetails = new XMLHttpRequest();
    getCovidDetails.onreadystatechange = function () {
        var searchText = document.getElementById("stateName").value
        if (getCovidDetails.readyState == 4 && getCovidDetails.status == 200) {

            covid19StateDetailsWithDistricts = JSON.parse(getCovidDetails.response); // use different name for displaying districts name

            // console.log(covid19StateDetailsWithDistricts); // displays all state names
            // console.log(covid19StateWiseDetails.statewise[i].state); // it will displays the districts data

            // console.log(covid19StateDetailsWithDistricts[covid19StateWiseDetails.statewise[i].state]); // when we click on particular state it will displays the districts data

            if (searchText.length == 0) {
                showDistrictDetails(covid19StateDetailsWithDistricts[covid19StateWiseDetails.statewise[i].state]) // for searching an state name in search bar we use this
            }
            else {
                showDistrictDetails(covid19StateDetailsWithDistricts[filteredStates[i].state]) // after seraching an state name it will displays the total dist in searched state
            }



        }
    }
    getCovidDetails.open("GET", api_url);
    getCovidDetails.send()
}


function showDistrictDetails(districtsDetails) {
    document.getElementById("cardsArea").innerHTML = ""  // when we click on the particular state, cardArea will be empty
    document.getElementById("backToStates").style.display = "block" // when we click on the particular state it will shows the backToStates button

    for (a in districtsDetails.districtData) {
        console.log(a);
        var cardDiv = document.createElement("div") // when we require an div with class
        cardDiv.setAttribute("class", "card")

        var cardBody = document.createElement("div");

        var cardHeading = document.createElement("h4") // to display the state name in cardBody
        cardHeading.innerHTML = a
        cardBody.appendChild(cardHeading)

        cardBody.setAttribute("class", "card-body")

        cardDiv.appendChild(cardBody)

        document.getElementById("cardsArea").appendChild(cardDiv)
    }
}



function goBackToStateDetails() {
    document.getElementById("backToStates").style.display = "none";
    document.getElementById("stateName").value = "" //  after searching an state ,when click on go back it will clear the searched text
    getStateWiseDetails()
}