var globalIndex = null;
var users=[];

const editUser=(index)=>{
     globalIndex = index;
    var newUser = users[index];
    console.log(newUser)
    for(a in newUser){
        document.getElementById(a).value=newUser[a];
    }

    // document.getElementById('fname').value=newUser.fname;
    // document.getElementById('lname').value=newUser.lname;
    // document.getElementById('id').value=newUser.id;

}

function updateUsers(){

    let user={
        fname:document.getElementById('fname').value,
        lname:document.getElementById('lname').value,
        id:document.getElementById('id').value,
    }

    const url='http://localhost:3201/users/';
    var updateData = new XMLHttpRequest();
    updateData.onreadystatechange = function(){
        if(updateData.readyState == 4 && updateData.status == 200){
            getDatafromServer()
            console.log('user updated');
        }
    }

    updateData.open('PUT',url+users[globalIndex].id);
    updateData.setRequestHeader('content-Type','application/json')
    updateData.send(JSON.stringify(user))
}