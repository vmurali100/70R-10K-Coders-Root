function adduser(){

    temp = {
        id:document.getElementById("id").value,
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value
    }

    var api_url = "http://localhost:3000/one/"

    fetch(api_url,{
        method:"POST",
        body:JSON.stringify(temp),
        headers : {"Content-Type":"application/json"}
    })
    .then(res=>getDatafromServer())

}