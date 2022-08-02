

function adduser() {

    user={
        postId: document.getElementById("postid").value,
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        body: document.getElementById("body").value,
    };
    var api_url = "http://localhost:3000/comments/"
    var add_user = new XMLHttpRequest();

    add_user.onreadystatechange = function () {
        if (add_user.readyState == 4 && add_user.status == 200) {

            getDatafromServer()

        }
    }
    add_user.open("POST", api_url)
    add_user.setRequestHeader("Content-Type", "application/json")
    add_user.send(JSON.stringify(user))
}

function getDatafromServer(){

    var getData = new XMLHttpRequest()
    var api_url = "http://localhost:3000/comments"

    getData.onreadystatechange = function(){
        if(getData.readyState==4 && getData.status==200){
            console.log(getData.response)

            comments = JSON.parse(getData.response)
            displayuser()
        }

    }
    getData.open("GET",api_url)
    getData.send()
}


getDatafromServer()




