var coviddata = {};
function covidfunction() {
    var api_url = "https://data.covid19india.org/data.json";
    var covidvariable = new XMLHttpRequest();
    covidvariable.onreadystatechange = function () {
        if (covidvariable.readyState == 4 && covidvariable.status == 200) {
            // console.log(covidvariable.response)
            coviddata = JSON.parse(covidvariable.response)
            console.log(coviddata)
            covidfunction1(coviddata.cases_time_series)
        }
    }
    covidvariable.open("GET", api_url);
    covidvariable.send();
}
function covidfunction1(datewisedetails) {
    document.querySelector("ul").innerHTML="";
    datewisedetails.forEach((data, i) => {
        console.log(data)
        var covid1 = document.createElement("li");
        covid1.setAttribute("onclick","selecteduser("+i+")");
        covid1.innerHTML = data.date;
        document.querySelector("ul").appendChild(covid1)
    })
}
covidfunction();