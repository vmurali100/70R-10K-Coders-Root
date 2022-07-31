
function edituser(index) {
    globalindex = index;
    var newuser = todos[index]
    document.getElementById("userid").value=newuser.userid
        document.getElementById("id").value=newuser.id
        document.getElementById("title").value=newuser.title
        document.getElementById("completed").value=newuser.completed



        swapbuttons(true)
}

var globalindex = null;

function swapbuttons(value) {
    // console.log(value);
    if (value == true) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    } else {
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}
function updateuser() {
    var user = {
        userid: document.getElementById("userid").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        completed: document.getElementById("completed").value,

    }

    // displayusers();
    // cleartable();
    // swapbuttons(false)

    var apiurl = " http://localhost:3000/todos/"
    var updateuser = new XMLHttpRequest();
    updateuser.onreadystatechange = function () {
        if (updateuser.readyState == 4 && updateuser.status == 200) {
            getdatafromserver()
        }
    }
    updateuser.open("PUT", apiurl + todos[globalindex].id);
    updateuser.setRequestHeader("content-type", "application/json")
    updateuser.send(JSON.stringify(user))
}

