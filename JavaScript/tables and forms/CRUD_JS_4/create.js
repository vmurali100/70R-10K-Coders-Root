

var information = [
    {
        PlayerName: "Virat Kohli",
        Role: "Batsmen",
        MatchesPlayed: 262,
        RunsScored: 12344,
    },
    {
        PlayerName: "Rohit Sharma",
        Role: "Batsmen",
        MatchesPlayed: 233,
        RunsScored: 9376,

    },
    {
        PlayerName: "MS Dhoni",
        Role: "Batsmen / Wicket-Keeper",
        MatchesPlayed: 350,
        RunsScored: 10773,

    },

]

function adduser() {

    var temp = {

        PlayerName: document.getElementById("playername").value,
            Role  : document.getElementById("role").value,
     MatchesPlayed: document.getElementById("matchesplayed").value,
    RunsScored    : document.getElementById("runsscored").value,

    }

    information.push(temp)

    displayuser()

    clearform()
}


function validate() {

    var playernameValue = document.getElementById("playername").value;

    playernamepattern = /[0-9]/

    var roleValue = document.getElementById("role").value;

    rolepattern = /[0-9]/


    var matchesplayedValue = document.getElementById("matchesplayed").value

    var matchesplayedpattern = /[a-z]/i

    var runsscoredValue = document.getElementById("runsscored").value

    var runsscoredpattern = /[a-z]/i



    //check for id and  aplhabets

    if (playernameValue.length > 0 && // truw
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