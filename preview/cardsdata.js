var user = {};
var user2={};
function users() {
    var api_url = "https://data.covid19india.org/data.json";
    var user1 = new XMLHttpRequest();
    user1.onreadystatechange = function () {
        if (user1.readyState == 4 && user1.status == 200) {
            user = JSON.parse(user1.response);
            console.log(user)
            users1(user.statewise);
        }
    }
    user1.open("GET", api_url);
    user1.send()
}
users();
function users1(statedetails) {
    document.getElementById("ONE").innerHTML = "";
    statedetails.forEach((data, m) => {
        if (data.state !== "Total") {
            var card = document.createElement("div");
            document.getElementById("ONE").appendChild(card);
            card.setAttribute("onclick","users4("+m+")");
            card.setAttribute("class", "card");
            var cardbody = document.createElement("div");
            cardbody.setAttribute("class", "card-body");
            card.appendChild(cardbody);
            var cardheading = document.createElement("h6");
            cardbody.appendChild(cardheading);
            cardheading.innerHTML = data.state;
        }
    })
}
function users3() {
    var searchdata = document.getElementById("search").value;
    filterdata = user.statewise.filter((data1, i1) => {
        return data1.state.toLocaleLowerCase().indexOf(searchdata.toLocaleLowerCase()) > -1;
    })
    console.log(filterdata)
    users1(filterdata);
    document
}
function users4(m){
    var api_url = "https://data.covid19india.org/state_district_wise.json";
    var user3 = new XMLHttpRequest();
    user3.onreadystatechange = function () {
        if (user3.readyState == 4 && user3.status == 200) {
            user2= JSON.parse(user3.response);
            console.log(user2[user.statewise[m].state])
            users5(user2[user.statewise[m].state]);
        }
    }
    user3.open("GET", api_url);
    user3.send()
};
function users5(presentdata){
    document.getElementById("ONE").innerHTML="";
    document.getElementById("click").style.display="block";
    for(m in presentdata.districtData){
        console.log(m)
        var card = document.createElement("div");
        card.setAttribute("onclick","users7()")
        document.getElementById("ONE").appendChild(card);
        card.setAttribute("class", "card");
        var cardbody = document.createElement("div");
        cardbody.setAttribute("class", "card-body");
        card.appendChild(cardbody);
        var cardheading = document.createElement("h6");
        cardbody.appendChild(cardheading);
        cardheading.innerHTML =m;
    }
}
function users6(){
    document.getElementById("click").style.display="none";
    users();
}