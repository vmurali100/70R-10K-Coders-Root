var filteredStates,searchtxt;

console.log(allData)
function searchByState(){
    searchtxt = document.getElementById("statename").value;
    filteredStates = allData.statewise.filter((details)=>{
        console.log(details)
        return (
            details.state
            .toLocaleLowerCase()
            .indexOf(searchtxt.toLocaleLowerCase())>-1
        )
    })
    displaystateNames(filteredStates)
    console.log(filteredStates)
}

function showStateDetails(i) {
    if(searchtxt){
        console.log(filteredStates[i]);
        displayStateInfo(filteredStates[i])
    }
    else{
        displayStateInfo(allData.statewise[i])
        console.log(allData.statewise[i])
    }
}

function displayStateInfo(info){
    for(a in info){
        document.getElementById(a).innerHTML= info[a];
    }
}

