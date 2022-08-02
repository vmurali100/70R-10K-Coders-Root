var globalindex = null

var photos = []

function edituser(index){

    globalindex = index 



   
    
    document.getElementById("albumid").value = photos[index].albumid,
    document.getElementById("id").value = photos[index].id,
    document.getElementById("title").value = photos[index].title,
    document.getElementById("url").value = photos[index].url,
    document.getElementById("thumbnailUrl").value = photos[index].thumbnailUrl

    swapbuttons(true)

}

function updateuser() {

    temp1 = {

       albumId: document.getElementById("albumid").value,
       id: document.getElementById("id").value,

       title: document.getElementById("title").value,
       url: document.getElementById("url").value,
       thumbnailUrl: document.getElementById("thumbnailUrl").value

   };

   var api_url = "http://localhost:3000/photos/"

   var updateduser = new XMLHttpRequest();

   updateduser.onreadystatechange = function () {

       if (updateduser.readyState == 4 && updateduser.status == 200) {

           getDatafromServer()

       }
   }
   updateduser.open("PUT",api_url+photos[globalindex].id,temp1)
   updateduser.setRequestHeader("Content-type","application/json")
   updateduser.send(JSON.stringify(temp1))


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
