
         function displayuser() { // used to enter user data in the form of table

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
                editBtn.setAttribute("onclick","edituser("+i+")")
                edittd.appendChild(editBtn)
                trow.appendChild(edittd)
                

                var deletetd = document.createElement("td")
                var deleteBtn = document.createElement("button")
                deleteBtn.setAttribute("class","btn btn-danger")
                deleteBtn.innerHTML="delete"
                deleteBtn.setAttribute("onclick","deleteuser("+i+")")
                deletetd.appendChild(deleteBtn)
                trow.appendChild(deletetd)


            }
        }



        function clearform() {  // used to clear the form 

            document.getElementById("id").value = "" // value="" makes the values null 
            document.getElementById("email").value = ""
            document.getElementById("username").value = ""
            document.getElementById("password").value = ""
        }


        displayuser()
