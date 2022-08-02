
function fetchcreate() {


  temp = {
    postid : document.getElementById("postid").value,
    id : document.getElementById("id").value,
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    body : document.getElementById("body").value
  }

 fetch("http://localhost:3000/comments/", {
    method: "POST",
    body: JSON.stringify(temp),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((res)=>getDatafromServer())
 
 

}