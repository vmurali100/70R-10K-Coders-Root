
var covid19StateWiseDetails = {};


function getStateWiseDetails(){

    var api_url = "https://data.covid19india.org/data.json"

    var getCovidDetails = new XMLHttpRequest()

    getCovidDetails.onreadystatechange = function(){
        if(getCovidDetails.readyState==4 && getCovidDetails.status==200){
            covid19StateWiseDetails = JSON.parse(getCovidDetails.response)
            console.log(covid19StateWiseDetails)
            console.log(typeof(covid19StateWiseDetails))
            console.log(typeof(covid19StateWiseDetails.statewise))
            displayStateNames()
        }
    }
    getCovidDetails.open("GET",api_url)
    getCovidDetails.send()
}

getStateWiseDetails()


function displayStateNames(){
    document.querySelector("ul").innerHTML = ""
   covid19StateWiseDetails.statewise.forEach((covidDetails,i) => {
        if(covidDetails.state !== "Total"){
            console.log(covidDetails)
            
            var myli = document.createElement("li")
            myli.innerHTML = covidDetails.state
            myli.setAttribute("onclick","showStateDetails("+i+")")
            document.querySelector("ul").appendChild(myli)
        }
    })
}