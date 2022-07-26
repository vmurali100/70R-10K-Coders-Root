// function deleteuser(index) {

//     console.log(index)

//     users.splice(index, 1)

//     displayuser();

// }

// deleting user which was acquired through local server

function deleteuser(i){
    var api_url = "http://localhost:3000/users/"

    var delete_user = new XMLHttpRequest();

    delete_user.onreadystatechange = function(){
        if(delete_user.readyState==4 && delete_user.status==200){
            console.log("user deleted successfully")
            getDatafromServer()

        }
    }
    delete_user.open("DELETE",api_url+users[i].id);
    delete_user.send()

}