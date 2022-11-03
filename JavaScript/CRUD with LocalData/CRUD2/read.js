var users =[];
const  getDatafromServer=()=>{
    const url='http://localhost:3201/users';

    let getData = new XMLHttpRequest();
    getData.onreadystatechange = function(){
        if (getData.readyState ==4 && getData.status ==200){
        let result = getData.response;
        users=JSON.parse(result)
        console.log(users);
        displayUsers(users);
        }
    }
    getData.open('GET',url);
    getData.send();
}
getDatafromServer()