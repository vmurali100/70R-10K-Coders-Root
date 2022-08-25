var names=[]
function getDataFromServer(){
    //var api_url = "http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true"
    var api_url=" http://localhost:3000/names/"
var getData = new XMLHttpRequest();
getData.onreadystatechange = function (){
    if(getData.readyState == 4 && getData.status == 200){
    console.log(getData.response.length)
    names = JSON.parse(getData.response);
    console.log(names)
    displayUsers()
}
}
getData.open("GET",api_url);
getData.send()
}


function displayUsers() {
  document.querySelector("table").style.display = "block";
    document.querySelector("tbody").innerHTML = "";
    for (i = 0; i < names.length; i++) {
      var myTr = document.createElement("tr");
      for (a in names[i]) {
        var td1 = document.createElement("td");
        td1.innerHTML = names[i][a];
        myTr.appendChild(td1);
      }

      var editTd = document.createElement("td");
      var editBtn = document.createElement("button");
      editBtn.setAttribute("class","btn btn-warning")
      editBtn.setAttribute("onclick","editUser("+i+")")

      editBtn.innerHTML="Edit"
      editTd.appendChild(editBtn)

      var deleteTd = document.createElement("td");
      var deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("onclick","deleteUser("+i+")")
      deleteBtn.setAttribute("type","button")
      deleteBtn.setAttribute("class","btn btn-danger")
      deleteBtn.innerHTML="Delete"
      deleteTd.appendChild(deleteBtn)

      myTr.appendChild(editTd)

      myTr.appendChild(deleteTd)

      document.querySelector("tbody").appendChild(myTr);
    }
  }
  getDataFromServer()