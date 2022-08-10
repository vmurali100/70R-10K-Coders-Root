function getDistrictWiseDetails(i) {
    var api_url = "https://data.covid19india.org/state_district_wise.json";
    var getCovidDetails = new XMLHttpRequest();
    getCovidDetails.onreadystatechange = function () {
      var searchText = document.getElementById("stateName").value;
  
      if (getCovidDetails.readyState == 4 && getCovidDetails.status == 200) {
        covid19StateDetailsWithDistricts = JSON.parse(getCovidDetails.response);
        // console.log(covid19StateDetailsWithDistricts)
        // console.log(covid19StateWiseDetails.statewise[i].state);
        // console.log(covid19StateDetailsWithDistricts[covid19StateWiseDetails.statewise[i].state])
        if (searchText.length == 0) {
          showDistrictDetails(
            covid19StateDetailsWithDistricts[
              covid19StateWiseDetails.statewise[i].state
            ]
          );
        } else {
          showDistrictDetails(
              covid19StateDetailsWithDistricts[
                filteredStates[i].state
              ]
            );
        }
      }
    };
    getCovidDetails.open("GET", api_url);
    getCovidDetails.send();
  }
  
  function showDistrictDetails(districtsDetails) {
    document.getElementById("cardsArea").innerHTML = "";
    document.getElementById("backToStates").style.display = "block";
  
    for (a in districtsDetails.districtData) {
      console.log(a);
      var cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "card");
  
      var cardBody = document.createElement("div");
      var cardHeading = document.createElement("h4");
      cardHeading.innerHTML = a;
      cardBody.appendChild(cardHeading);
      cardBody.setAttribute("class", "card-body");
  
      cardDiv.appendChild(cardBody);
  
      document.getElementById("cardsArea").appendChild(cardDiv);
    }
  }
  
  function goBackToStatesDetails() {
    document.getElementById("backToStates").style.display = "none";
    document.getElementById("stateName").value=""
    getStateWiseDetails();
  }
  