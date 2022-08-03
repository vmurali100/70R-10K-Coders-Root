function getDistrictWiseDetails(i){
    var api_url = "https://data.covid19india.org/state_district_wise.json"
    var getCovidDetails = new XMLHttpRequest()
    getCovidDetails.onreadystatechange = function () {
        if (getCovidDetails.readyState == 4 && getCovidDetails.status == 200) {
            covid19StateWiseDetailsWithDistricts = JSON.parse(getCovidDetails.response)
            console.log(covid19StateWiseDetailsWithDistricts)
            console.log(covid19StateWiseDetails.statewise[i].state)
            console.log(covid19StateWiseDetailsWithDistricts[covid19StateWiseDetails.statewise[i].state])
          
        }
    }
    getCovidDetails.open("GET", api_url)
    getCovidDetails.send()
}
function showDistrictDetails(districtDetails){
    console.log(districtDetails)
    document.getElementById("cardsArea").innerHTML = ""
    document.getElementById("backToStates").style.display="block"
}
function getBckToStatesDetails(){
    document.getElementById("backToStates").style.display="none"
    getStateWiseDetails()
}