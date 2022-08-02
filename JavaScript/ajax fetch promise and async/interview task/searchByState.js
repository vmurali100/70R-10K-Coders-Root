

function searchByState() {
    var searchText = document.getElementById("stateName").value;
    var filteredStates = covid19StateWiseDetails.statewise.filter((details)=>{
        return details.state.toLocaleLowercase().indexOf(searchText.toLocaleLowercase())});
        displayStateNames(filteredStates)
    
}


