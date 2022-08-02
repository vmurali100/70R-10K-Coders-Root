
var filteredStates;
var searchText;

function searchByState(){

    searchText = document.getElementById("stateName").value;
    console.log(searchText)
     filteredStates = covid19StateWiseDetails.statewise.filter((details)=>{
       return details.state.indexOf(searchText) > -1
    });
    console.log(filteredStates)
    displayStateNames(filteredStates)

}


function showStateDetails(i){
    if(searchText){
    console.log(filteredStates[i]) 
    
    displayStateInfo(filteredStates[i])
}
    else{
        console.log(covid19StateWiseDetails.statewise[i])
       
        displayStateInfo(covid19StateWiseDetails.statewise[i])
    }
    
}


function displayStateInfo(info) {
    for(a in info){
        document.getElementById(a).innerHTML = info[a]
    }
}