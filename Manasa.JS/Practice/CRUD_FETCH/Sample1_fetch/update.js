function editUser(index) {
    globalIndex = index;
    var newUser = users[index];
    document.getElementById("id").value = newUser.id
    document.getElementById("email").value = newUser.email
    document.getElementById("username").value = newUser.username
    document.getElementById("password").value = newUser.password
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
    
    var user = {
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };
    
    // displayUsers()
    // clearTable()
    // swapButton(false)
    async function handleFetchAsync() {
        var usersInfo = await fetch(api_url) //1st then
        var users = await usersInfo.json(); //2nd then
        console.log(users)
        displayUsers()
    }


    handleFetchAsync()

    // updateUser.open("PUT",api_url+users[globalIndex].id,user);
    // updateUser.setRequestHeader("Content-Type","application/json")

    // updateUser.send(JSON.stringify(user))
}