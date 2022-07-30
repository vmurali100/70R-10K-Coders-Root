function editUser(index) {
    globalIndex = index;
    var newUser = posts[index];
    document.getElementById("userid").value = newUser.userid
    document.getElementById("id").value = newUser.id
    document.getElementById("title").value = newUser.title
    document.getElementById("body").value = newUser.body
    swapButton(true)
}
function swapButton(value) {
    if (value === true) {
        document.getElementById("updateBtn").style.display = "block"
        document.getElementById("addBtn").style.display = "none"
    }
    else {
        document.getElementById("updateBtn").style.display = "none"
        document.getElementById("addBtn").style.display = "block"
    }
}
function updateuser() {
    
    var post = {
        userid: document.getElementById("userid").value,
        id: document.getElementById("id").value,
        title: document.getElementById("title").value,
        body: document.getElementById("body").value
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    var api_url="http://localhost:3000/posts/"
    var updateUser = new XMLHttpRequest();
    updateUser.onreadystatechange = function () {
        if (updateUser.readyState == 4 && updateUser.status == 200){
            getDataFromServer()
        }
    }
    updateUser.open("PUT",api_url+posts[globalIndex].id,post);
    updateUser.setRequestHeader("Content-Type","application/json")

    updateUser.send(JSON.stringify(post))

    swapButton(false)
    clearform()
}

function clearform() {
    document.getElementById("userId").value = ""
    document.getElementById("id").value = ""
    document.getElementById("title").value = ""
    document.getElementById("body").value = ""
  
}