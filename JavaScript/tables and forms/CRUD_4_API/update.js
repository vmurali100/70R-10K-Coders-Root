
var ig=null;

function edituser(index){

    ig =  index

    document.getElementById("id").value = information[index].id;
     document.getElementById("playername").value = information[index].PlayerName;
     document.getElementById("role").value =  information[index].Role;
     document.getElementById("matchesplayed").value = information[index].MatchesPlayed;
     document.getElementById("runsscored").value = information[index].RunsScored;

     swapbuttons(true)
}

function updateuser(){

    information[ig].id = document.getElementById("id").value; 
    information[ig].PlayerName = document.getElementById("playername").value; 
    information[ig].Role = document.getElementById("role").value; 
    information[ig].MatchesPlayed = document.getElementById("matchesplayed").value;
    information[ig].RunsScored = document.getElementById("runsscored").value;

    api_url = "http://localhost:3000/information/"
    var update_user = new XMLHttpRequest()

    update_user.onreadystatechange = function(){
        if(update_user.readyState == 4 && update_user.status == 200){
            console.log(update_user.response)
            getDatafromServer4()
       }
    }

    update_user.open("PUT",api_url+information[ig].id,information[ig])
    update_user.setRequestHeader("Content-Type","application/json")
    update_user.send(JSON.stringify(information[ig]))



    clearform()

    swapbuttons(false)

    displayuser()


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