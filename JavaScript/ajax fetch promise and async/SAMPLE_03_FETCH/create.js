
function fetchcreate() {

  var temp1 = {
    id1: document.getElementById("id1").value,
    id: document.getElementById("id").value,
    title: document.getElementById("title").value,
    url: document.getElementById("url").value,
    thumbnailUrl: document.getElementById("thumbnailUrl").value
  }

  fetch("http://localhost:3000/photos", {
    method: "POST",
    body: JSON.stringify(temp1),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((res) => getDatafromServer())
}