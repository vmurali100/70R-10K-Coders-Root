var coviddata = {};
var coviddata1 = {};
function covidfunction() {
    var api_url = "https://data.covid19india.org/data.json";
    var covidvariable = new XMLHttpRequest();
    covidvariable.onreadystatechange = function () {
        if (covidvariable.readyState == 4 && covidvariable.status == 200) {
            // console.log(covidvariable.response)
            coviddata = JSON.parse(covidvariable.response)
            console.log(coviddata)
            covidfunction1(coviddata.statewise)
        }
    }
    covidvariable.open("GET", api_url);
    covidvariable.send();
}
function covidfunction1(datewisedetails) {
    document.getElementById("cardsdata").innerHTML="";
    datewisedetails.forEach((data, i) => {
        if(data.state !=="Total"){
        console.log(data)
        var card=document.createElement("div");
        card.setAttribute("class","card")
        card.setAttribute("onclick","districtdata1("+i+")");
        var cardbody=document.createElement("div");
        var cardheading=document.createElement("h6");
        cardheading.innerHTML=data.state;
        cardbody.appendChild(cardheading);
        cardbody.setAttribute("class","card-body")
        card.appendChild(cardbody)
        document.getElementById("cardsdata").appendChild(card);
        }
    })
}
covidfunction();