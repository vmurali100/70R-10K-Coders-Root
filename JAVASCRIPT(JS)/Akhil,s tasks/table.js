// var num=prompt("enter a number")


// var i=0;
// document.write('<table border="3">')
// for(i=1;i<=10;i++){
//     document.write("<tr><td backgroundcolor=yellow> "+ num + "X" + i + "=" + num*i +"</td></tr>")
// }
// document.write("</table>");



function Function(){
    var num=document.getElementById("table").value

    // var i=0;
    // document.write('<table border="3">')
    // for(i=1;i<=10;i++){
    //     document.write("<tr><td backgroundcolor=yellow> "+ num + "X" + i + "=" + num*i +"</td></tr>")
    // }
    // document.write("</table>");

    
        var myDiv = document.createElement("div")
            var results = ""
            for(j=1;j<=10;j++){
                results=results+num +" X "+j + " = "+num*j+"<br>";
                myDiv.innerHTML = results
            }
        document.body.appendChild(myDiv)
    
}