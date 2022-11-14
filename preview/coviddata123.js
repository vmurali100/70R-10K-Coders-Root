var user = {};
var filterdata;
var searchdata;
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
function users1(statedata) {
    document.querySelector("ul").innerHTML = "";
    statedata.forEach((data, i) => {
        if (data.state !== "Total") {
            var myli = document.createElement("li");
            myli.setAttribute("onclick", "users3(" + i + ")")
            myli.innerHTML = data.state;
            document.querySelector("ul").appendChild(myli);
        }
    })
}
function users2() {
    searchdata = document.getElementById("inputdata").value;
    filterdata = user.statewise.filter((data1, i) => {
        return data1.state.toLocaleLowerCase().indexOf(searchdata.toLocaleLowerCase()) > -1;
    })
    console.log(filterdata);
    users1(filterdata);
}
function users3(i) {
    if (searchdata) {
        users4(filterdata[i]);
        // document.getElementById("freewifi").innerHTML=JSON.stringify(filterdata[i]);
        console.log(filterdata[i])
    } else {
        users4(user.statewise[i]);
        // document.getElementById("freewifi").innerHTML=JSON.stringify(user.statewise[i]);
        console.log(user.statewise[i])
    }
}
function users4(info) {
    for (a in info) {
        document.getElementById(a).innerHTML= info[a];
    }
}
