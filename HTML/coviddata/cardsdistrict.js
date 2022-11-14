function districtdata1(i){
    datasearch = document.getElementById("search").value;
    var api_url = "https://data.covid19india.org/state_district_wise.json";
    var covidvariable1 = new XMLHttpRequest();
    covidvariable1.onreadystatechange = function () {
        if (covidvariable1.readyState == 4 && covidvariable1.status == 200) {
            coviddata1 = JSON.parse(covidvariable1.response)
            console.log(coviddata.statewise[i].state);
            console.log(coviddata1[coviddata.statewise[i].state])
            // displaydistrict(coviddata1[coviddata.statewise[i].state])
            if(datasearch ==0){
                 displaydistrict(coviddata1[coviddata.statewise[i].state])
            }
            else{
                displaydistrict(coviddata1[filtersearch[i].state])
            }
        }
    }
    covidvariable1.open("GET", api_url);
    covidvariable1.send();
}
function displaydistrict(presentdata){
    document.getElementById("cardsdata").innerHTML="";
    document.getElementById("gofront").style.display="block";
    for(a in presentdata.districtData){
    console.log(a)
    var card=document.createElement("div");
        card.setAttribute("class","card")
        var cardbody=document.createElement("div");
        var cardheading=document.createElement("h6");
        cardheading.innerHTML=a;
        cardbody.appendChild(cardheading)
        cardbody.setAttribute("class","card-body")
        card.appendChild(cardbody)
        document.getElementById("cardsdata").appendChild(card);
    }
    }
    function displaydetails(datum){
        datum.foreach((a,b)=>{
            console.log(a)
        })
    }
function recalldata(){
    document.getElementById("gofront").style.display="none";
    covidfunction();
}