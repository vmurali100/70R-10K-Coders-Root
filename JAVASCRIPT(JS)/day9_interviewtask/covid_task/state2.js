var covid19statewisedetails = {}
var  covid19statewisedetailswithdistricts = {}
function getstatewisedetails() {
    var apiurl = "https://data.covid19india.org/data.json"
    var getcoviddetails = new XMLHttpRequest()
    getcoviddetails.onreadystatechange = function(){
        if (getcoviddetails.readyState == 4 && getcoviddetails.status == 200) {
            covid19statewisedetails = JSON.parse(getcoviddetails.response)
            // console.log(covid19statewisedetails)
            displaystatenames(covid19statewisedetails.statewise)
        }
    }
    getcoviddetails.open("GET",apiurl)
    getcoviddetails.send()
}




function displaystatenames(statewisedetails) { 
    document.getElementById("cardsarea").innerHTML=""
    // document.querySelector("ul").innerHTML=""
    statewisedetails.forEach((coviddetails,i)=>{
        if(coviddetails.state !=="Total"){
var carddiv=document.createElement("div")
carddiv.setAttribute("class","card")
carddiv.setAttribute("onclick","getdistrictwisedetails("+i+")")
var cardbody=document.createElement("div")
var cardheading=document.createElement("h5")
cardheading.innerHTML=coviddetails.state
cardbody.appendChild(cardheading)
cardbody.setAttribute("class","card-body")

carddiv.appendChild(cardbody)

document.getElementById("cardsarea").appendChild(carddiv)


        }
    })
}
getstatewisedetails()







