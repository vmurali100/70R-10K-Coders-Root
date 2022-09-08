     
        var users = []

        function displayuser() { // used to enter user data in the form of table

           // document.querySelector("table").style.display="block"

           document.querySelector("tbody").innerHTML = "" //used to clear the table to avoid duplicate entries of the user data

           for (i = 0; i < users.length; i++) {
               var trow = document.createElement("tr")
               document.querySelector("tbody").appendChild(trow)

               // trow.setAttribute("onclick", "deleteuser(" + i + ")") // this sets deleteuser as an onclick event in attribute form on tr
               for (a in users[i]) {
                   var td1 = document.createElement("td")
                   td1.innerHTML = users[i][a]
                   trow.appendChild(td1)
               }


               var edittd = document.createElement("td")
               var editBtn = document.createElement("button")
               editBtn.setAttribute("class","btn btn-warning")
               editBtn.innerHTML="edit"
               editBtn.setAttribute("onclick","edituser("+ i +")")
               edittd.appendChild(editBtn)
               editBtn.setAttribute("type","button")
               trow.appendChild(edittd)
               

               var deletetd = document.createElement("td")
               var deleteBtn = document.createElement("button")
               deleteBtn.setAttribute("class","btn btn-danger")
               deleteBtn.innerHTML="delete"
               deleteBtn.setAttribute("onclick","deleteuser("+i+")")
               deleteBtn.setAttribute("type","button")
               deletetd.appendChild(deleteBtn)
               trow.appendChild(deletetd)


           }
       }

       getDatafromServer()



       function clearform() {  // used to clear the form 

           document.getElementById("id").value = "" // value="" makes the values null 
           document.getElementById("email").value = ""
           document.getElementById("username").value = ""
           document.getElementById("password").value = ""
       }

       
       function getDatafromServer(){

          

           var api_url = "http://localhost:3000/users"
           var getData = new XMLHttpRequest();

           getData.onreadystatechange = function(){
               if (getData.readyState == 4 && getData.status==200) {
                   console.log(getData.response)

                   console.log(typeof(getData.response))

                   console.log(typeof(users))

                   users = JSON.parse(getData.response);  //parses string to array. users is array and getData.response is of string type

                   console.log(users)

                   displayuser()
               }

            

               
           }

           getData.open("GET",api_url)
           getData.send()
       }


       displayuser()