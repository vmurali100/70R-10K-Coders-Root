
var indexglobal

function edituser(index){

    indexglobal =  index

     document.getElementById("playername").value = information[index].PlayerName;
     document.getElementById("role").value =  information[index].Role;
     document.getElementById("matchesplayed").value = information[index].MatchesPlayed;
     document.getElementById("runsscored").value = information[index].RunsScored;

     swapbuttons(true)
}

function updateuser(){
 
    information[indexglobal].PlayerName = document.getElementById("playername").value; 
    information[indexglobal].Role = document.getElementById("role").value; 
    information[indexglobal].MatchesPlayed = document.getElementById("matchesplayed").value;
    information[indexglobal].RunsScored = document.getElementById("runsscored").value;

    displayuser()

    clearform()

    swapbuttons(false)


}

function swapbuttons(value) {

    if (value == true) {
        document.getElementById("addBtn").style.display = "none"
        document.getElementById("updateBtn").style.display = "block"
    }
    else {
        document.getElementById("addBtn").style.display = "block"
        document.getElementById("updateBtn").style.display = "none"
    }
}