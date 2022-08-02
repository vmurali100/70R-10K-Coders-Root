var globalindex = null;

function edituser(index) {

    globalindex = index

    document.getElementById("postid").value = comments[index].postId,
        document.getElementById("id").value = comments[index].id,

        document.getElementById("name").value = comments[index].name,
        document.getElementById("email").value = comments[index].email,
        document.getElementById("body").value = comments[index].body
    swapbuttons(true)
}

function updateuser() {

     temp1 = {

        postId: document.getElementById("postid").value,
        id: document.getElementById("id").value,

        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        body: document.getElementById("body").value

    };

    var api_url = "http://localhost:3000/comments/"

    var updateduser = new XMLHttpRequest();

    updateduser.onreadystatechange = function () {

        if (updateduser.readyState == 4 && updateduser.status == 200) {

            getDatafromServer()

        }
    }
    updateduser.open("PUT",api_url+comments[globalindex].postId,temp1)
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
