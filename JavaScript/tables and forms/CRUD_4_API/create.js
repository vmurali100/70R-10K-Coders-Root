

function adduser() {

    var temp = {
        id : document.getElementById("id").value,
        PlayerName: document.getElementById("playername").value,
            Role  : document.getElementById("role").value,
     MatchesPlayed: document.getElementById("matchesplayed").value,
    RunsScored    : document.getElementById("runsscored").value,

    }
     
    api_url = "http://localhost:3000/information"
    
    var add_user =  new XMLHttpRequest()

    add_user.onreadystatechange = function(){

        if(add_user.readyState == 4 && add_user.status == 200){
            console.log(add_user.response)
            getDatafromServer4()
       }
    }
    

    add_user.open("POST",api_url);
    add_user.setRequestHeader("Content-Type","application/json");
    add_user.send(JSON.stringify(temp))


  
}




function validate() {

    var playernameValue = document.getElementById("playername").value;

    playernamepattern = /[0-9]/

    var idValue = document.getElementById("id").value

    idpattern = /[a-z]/i

    var roleValue = document.getElementById("role").value;

    rolepattern = /[0-9]/


    var matchesplayedValue = document.getElementById("matchesplayed").value

    var matchesplayedpattern = /[a-z]/i

    var runsscoredValue = document.getElementById("runsscored").value

    var runsscoredpattern = /[a-z]/i



    //check for id and  aplhabets

    if (idValue.length > 0 &&
        !idpattern.test(idValue) &&
        playernameValue.length > 0 && // truw
        !playernamepattern.test(playernameValue) &&  //true
        !rolepattern.test(roleValue) && //true
        matchesplayedValue.length > 0 && //true
        !matchesplayedpattern.test(matchesplayedValue) && 
        runsscoredValue.length > 0 &&
        !runsscoredpattern.test(runsscoredValue)) {
        document.getElementById("addBtn").removeAttribute("disabled") //removes disabled on addBtn

    }
    else {
        document.getElementById("addBtn").setAttribute("disabled", true)
    }

    //check for alphabets to show error message

    if (idpattern.test(idValue) && idValue.length > 0) {
        document.querySelector("#iderror").style.display = "block";
    }
    else {
        document.querySelector("#iderror").style.display = "none";
    }

    if (playernamepattern.test(playernameValue) && playernameValue.length > 0) {
        document.querySelector("#playernameerror").style.display = "block";
    }
    else {
        document.querySelector("#playernameerror").style.display = "none";
    }
    // ------------------------------------------------------------------------------------------------

    if (rolepattern.test(roleValue) && roleValue.length > 0) {
        document.querySelector("#roleerror").style.display = "block";
    }
    else {
        document.querySelector("#roleerror").style.display = "none";
    }
    // -------------------------------------------------------------------------------------------------------------
    if (matchesplayedpattern.test(matchesplayedValue) && matchesplayedValue.length > 0) {
        document.querySelector("#matchesplayederror").style.display = "block"
    }
    else {
        document.querySelector("#matchesplayederror").style.display = "none"
    }

    //  ------------------------------------------------------------------------------------------------------------------   
    if (runsscoredpattern.test(runsscoredValue) && runsscoredValue.length > 0) {
        document.querySelector("#runsscorederror").style.display = "block"
    }
    else {
        document.querySelector("#runsscorederror").style.display = "none"
    }
}