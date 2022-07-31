function displayusers() {
    
    document.querySelector("tbody").innerHTML = ""
    for (i = 0; i<todos.length; i++) {
        var tr = document.createElement("tr");
        for (a in todos[i]) {
            var td1 = document.createElement("td");
            td1.innerHTML = todos[i][a]; 
            tr.appendChild(td1);
        }
    }
}
