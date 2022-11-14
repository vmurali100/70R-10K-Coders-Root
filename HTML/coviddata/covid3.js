var datasearch;
var filtersearch;
var datasearch1;
var filtersearch1;
function searchdate() {
    datasearch = document.getElementById("search").value;
    filtersearch = coviddata.statewise.filter((hyd) => {
        return hyd.state.toLocaleLowerCase().indexOf(datasearch.toLocaleLowerCase()) > -1
    })
    console.log(filtersearch)
    covidfunction1(filtersearch)
}
function selecteduser(i){
    if(datasearch){
        tablemodel(filtersearch[i])
    // document.getElementById("outputdetails").innerHTML=JSON.stringify(filtersearch[i])
    console.log(filtersearch[i])
    }else{
        tablemodel(coviddata.statewise[i])
    // document.getElementById("outputdetails").innerHTML=JSON.stringify(coviddata.cases_time_series[i])
    console.log(coviddata.statewise[i])
    }
}
function tablemodel(info){
    for(a in info){
    document.getElementById(a).innerHTML=info[a]
}
}