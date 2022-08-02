var globalindex = null

var todos = []

function edituser(index){

    globalindex = index 

    document.getElementById("id").value = todos[index].id,
    document.getElementById("title").value = todos[index].title,
    document.getElementById("completed").value = todos[index].completed,


    swapbuttons(true)

}

function updateuser() {

    temp1 = {
       id: document.getElementById("id").value,
       title: document.getElementById("title").value,
       completed: document.getElementById("completed").value,
       };

   var api_url = "http://localhost:3000/todos/"

   var updateduser = new XMLHttpRequest();

   updateduser.onreadystatechange = function () {

       if (updateduser.readyState == 4 && updateduser.status == 200) {

           getDatafromServer()

       }
   }
   updateduser.open("PUT",api_url+todos[globalindex].id,temp1)
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
