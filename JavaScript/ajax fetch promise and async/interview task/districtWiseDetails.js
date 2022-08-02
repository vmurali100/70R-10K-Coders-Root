

function getDistrictWiseDetails(i){

    var api_url = "https://data.covid19india.org/state_district_wise.json"

    var getCovidDetails = new XMLHttpRequest()

    getCovidDetails.onreadystatechange = function(){
        var searchText = document.getElementById("stateName").value
        if(getCovidDetails.readyState==4 && getCovidDetails.status==200){
            covid19DistrictWiseDetails = JSON.parse(getCovidDetails.response)
            // console.log(covid19DistrictWiseDetails)
            // console.log(covid19StateWiseDetails.statewise[i].state)
            // console.log(covid19DistrictWiseDetails[covid19StateWiseDetails.statewise[i].state])

            if(searchText.length==0){
            showDistrictDetails(covid19DistrictWiseDetails[covid19StateWiseDetails.statewise[i].state])
            }
            else{
                showDistrictDetails(covid19DistrictWiseDetails[filteredStates[i].state])

            }
        }
    }
    getCovidDetails.open("GET",api_url)
    getCovidDetails.send()
}

function showDistrictDetails(districtDetails){
    console.log(districtDetails)
    document.getElementById("cardsarea").innerHTML = ""
    document.getElementById("backToStates").style.display="block"
    for(a in districtDetails.districtData){
        console.log(a)
        var cardDiv = document.createElement("div")
        cardDiv.setAttribute("class","card")

        var cardbody = document.createElement("div")
        cardbody.setAttribute("calss","card-body")
        var cardHeading = document.createElement("h4")
        cardHeading.innerHTML=a
        cardbody.appendChild(cardHeading)
    
        cardDiv.appendChild(cardbody)
        document.getElementById("cardsarea").appendChild(cardDiv)
    }



}

function getBackToStatesDetails(){
    document.getElementById("backToStates").style.display="none"
    document.getElementById("stateName").value = ""
    getStateWiseDetails()
   
}
