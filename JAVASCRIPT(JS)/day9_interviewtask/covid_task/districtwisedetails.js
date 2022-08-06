function getdistrictwisedetails(i) {
    var apiurl = "https://data.covid19india.org/state_district_wise.json"
    var getcoviddetails = new XMLHttpRequest()
    getcoviddetails.onreadystatechange = function () {
        var searchtext = document.getElementById("statename").value

        if (getcoviddetails.readyState == 4 && getcoviddetails.status == 200) {
            covid19statewisedetailswithdistricts = JSON.parse(getcoviddetails.response)
            // console.log( covid19statewisedetailswithdistricts)
            // console.log(covid19statewisedetails.statewise[i].state)
            // console.log( covid19statewisedetailswithdistricts[covid19statewisedetails.statewise[i].state])

            if (searchtext.length == 0) {
                showdistrictdetails(covid19statewisedetailswithdistricts[covid19statewisedetails.statewise[i].state])
            } else {

                showdistrictdetails(covid19statewisedetailswithdistricts[filteredstates[i].state])

            }
        }
    }
    getcoviddetails.open("GET", apiurl)
    getcoviddetails.send()
}

function showdistrictdetails(districtsdetails) {
    // console.log(districtsdetails)
    document.getElementById("cardsarea").innerHTML = "";
    document.getElementById("backtostates").style.display = "block"

    for (a in districtsdetails.districtData) {
        console.log(a)

        var carddiv = document.createElement("div")
        carddiv.setAttribute("class", "card")
        // carddiv.setAttribute("onclick", "getdistrictwisedetails("+i+")")
        var cardbody = document.createElement("div")
        var cardheading = document.createElement("h5")
        cardheading.innerHTML = a
        cardbody.appendChild(cardheading)
        cardbody.setAttribute("class", "card-body")

        carddiv.appendChild(cardbody)

        document.getElementById("cardsarea").appendChild(carddiv)

    }
}

function gobacktostatesdetails() {
    document.getElementById("backtostates").style.display = "none"
    document.getElementById("statename").value = ""

    getstatewisedetails()
}