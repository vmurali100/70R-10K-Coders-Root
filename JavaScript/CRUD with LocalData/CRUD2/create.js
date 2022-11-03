var users=[];

const readUsers=()=>{
    let user={
        
        fname:document.getElementById('fname').value,
        lname:document.getElementById('lname').value,
        id:document.getElementById('id').value,
    }

    const url='http://localhost:3201/users';
    var createUser = new XMLHttpRequest();
    createUser.onreadystatechange = function (){
        if(createUser.readyState == 4 && createUser.status == 200){
            console.log('user updated');
            getDatafromServer()
        }
    }
    createUser.open('POST',url);
    createUser.setRequestHeader('content-Type','application/json');
    createUser.send(JSON.stringify(user));
}

const displayUsers=(users)=>{
    document.querySelector("tbody").innerHTML ="";
    users.forEach((user,id)=>{
        var myTr =document.createElement('tr');
        document.querySelector('tbody').appendChild(myTr);
        for(a in user){
            var myTd = document.createElement('td');
            myTd.innerHTML=user[a];
            myTr.appendChild(myTd)
        }
        let editTd = document.createElement('td');
        let editbtn = document.createElement('button');
        editbtn.innerHTML ='Edit';
        editbtn.setAttribute("type","button")
        editbtn.setAttribute("onclick","editUser("+id+")");
        editTd.appendChild(editbtn);
        myTr.appendChild(editTd);


        let deleteTd = document.createElement('td');
        let deletebtn = document.createElement('button');
        deletebtn.innerHTML ='Delete';
        deletebtn.setAttribute("onclick","deleteUser("+id+")");
        deletebtn.setAttribute("type","button")
        deleteTd.appendChild(deletebtn);
        myTr.appendChild(deleteTd)
    })
}