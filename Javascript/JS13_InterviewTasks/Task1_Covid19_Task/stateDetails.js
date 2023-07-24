var covid19StateWiseDetails = {}
function getStateWiseDetails(){
    var api_url= "https://data.covid19india.org/data.json"
    var getCovidDetails = new XMLHttpRequest();
    getCovidDetails.onreadystatechange=function(){
        if(getCovidDetails.readyState == 4 && getCovidDetails.status == 200){
            covid19StateWiseDetails = JSON.parse(getCovidDetails.response);
            console.log(covid19StateWiseDetails)
            displayStateNames(covid19StateWiseDetails.statewise)
        }
    }
    getCovidDetails.open("GET",api_url);
    getCovidDetails.send()
}

function displayStateNames (stateWiseDetails){
    document.querySelector("ul").innerHTML = ""
    stateWiseDetails.forEach((covidDetails,i)=>{
        if(covidDetails.state !== "Total"){
            var myLi = document.createElement("li")
            var districtDetailsBtn = document.createElement("button")
            districtDetailsBtn.innerHTML="Show District Details"
            myLi.setAttribute("onclick","showStateDetails("+i+")")
            myLi.innerHTML = covidDetails.state
            document.querySelector("ul").appendChild(myLi)
        }
    })
}
getStateWiseDetails()