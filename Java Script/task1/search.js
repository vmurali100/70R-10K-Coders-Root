var filteredStates;
var searchText;
function searchByState() {
    searchText = document.getElementById("stateName").value;
    filteredStates = covid19StateWiseDetails.statewise.filter((details) => {
        return details.state.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1;
    })
    displayStateNames(filteredStates)
}
function showStateDetails(i) {
    if(searchText){

        console.log(filteredStates[i])
        displayStateInfo(filteredStates[i])
       
    }else{
        displayStateInfo(covid19StateWiseDetails.statewise[i])
        console.log(covid19StateWiseDetails.statewise[i])
        
    }
    
}
function displayStateInfo(info){
    console.log(info)
    for(a in info){
        document.getElementById(a).innerHTML = info[a]
    }
}