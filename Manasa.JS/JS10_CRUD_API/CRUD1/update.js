var globalIndex =null 

var users = []
function getDataFromServer(){
    var api_url ="http://localhost:3000/users"

    var getData = new XMLHttpRequest(); // it invokes for creating an object and that data will get stored in getdata 

    getData.onreadystatechange = function(){
        if(getData.readyState == 4 && getData.status == 200){ // thhis function will be repeated if data changes 1 to 2, 2 to 3..
            console.log(getData.response)
        // to convert a string to object
        users = JSON.parse(getData.response);
        console.log(users)
          
        }
    };
    getData.open("GET",api_url);
    getData.send()
    displayUsers()
}

function edituser(index){

    globalIndex = index;
    
    document.getElementById("id").value=users[index] .id
    document.getElementById("email").value=users[index].email
    document.getElementById("username").value=users[index] .username
    document.getElementById("password").value=users[index] .password
    swapbuttons(true)
}

var globalIndex = null;

function swapbuttons(value){
    if (value == true){
        document.getElementById("updateBtn").style.display="block";
        document.getElementById("addBtn").style.display="none";
     }
     else {
        document.getElementById("updateBtn").style.display="none";
        document.getElementById("addBtn").style.display="block";
     }

    }

function updateuser(){

    var user = {
    
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        
    };

    users[globalIndex] = user;
    
    clearform();
    swapbuttons(false)

}
displayUsers()


    