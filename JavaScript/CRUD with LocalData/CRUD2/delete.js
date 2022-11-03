
function deleteUser(index){
    const url='http://localhost:3201/users/';
    let deleteData = new XMLHttpRequest();
    deleteData.onreadystatechange=function(){
        if(deleteData.readyState == 4 && deleteData.status == 200){
            console.log('user deleted');
            getDatafromServer();
        }
    }
    deleteData.open('DELETE',url+users[index].id);
    deleteData.send()
}