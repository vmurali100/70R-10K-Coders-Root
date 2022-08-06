var filteredstates
var searchtext 
function searchbystate() {
 searchtext = document.getElementById("statename").value;
 filteredstates = covid19statewisedetails.statewise.filter((details) => {
        return details.state.toLocaleLowerCase().indexOf(searchtext.toLocaleLowerCase()) > -1;
    })
    displaystatenames(filteredstates)
}


function showstatedetails(i) {
    if (searchtext) {
        console.log(  filteredstates [i])
        displaystateinfo(filteredstates [i])
    } else {
        displaystateinfo(covid19statewisedetails.statewise[i])
      console.log(  covid19statewisedetails.statewise[i])
    }
    
}


function displaystateinfo(info){
    // console.log(info)
    for(a in info){
        document.getElementById(a).innerHTML=info[a]
    }
}