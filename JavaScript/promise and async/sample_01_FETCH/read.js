fetch("http://localhost:3001/posts")
.then((res)=>res.json())
.then((data)=>{console.log(data)});