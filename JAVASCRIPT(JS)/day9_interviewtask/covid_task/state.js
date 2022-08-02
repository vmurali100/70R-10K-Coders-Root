var covid19statewisedetails = {}
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
    document.querySelector("ul").innerHTML=""
    statewisedetails.forEach((coviddetails,i)=>{
        if(coviddetails.state !=="Total"){
            // console.log(coviddetails)
var li=document.createElement("li")
li.setAttribute("onclick","showstatedetails("+i+")")
li.innerHTML=coviddetails.state
document.querySelector("ul").appendChild(li)

        }
    })
}
getstatewisedetails()







