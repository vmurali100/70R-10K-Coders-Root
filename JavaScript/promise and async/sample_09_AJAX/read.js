var api_url = "http://localhost:3000/items"
var items = []
function getDatafromServer(){
  
    var getData = new XMLHttpRequest();
    getData.onreadystatechange=function(){
        if(getData.readyState==4 && getData.status==200){
            console.log(getData.response)
            items = JSON.parse(getData.response)
            displayusers()
        }
    }
    getData.open("GET",api_url)
    getData.send()
}

getDatafromServer()

function displayusers(){

    var selectElement = document.querySelector("select")
    console.log(items.length)
    items.forEach((user,i)=>{
        var opt = document.createElement("option");
        opt.innerHTML=user.id
        selectElement.appendChild(opt)
    } )

}


var selectedItem = {}

function displaysingleitem(){
    var sValue = document.querySelector("select").value
    selectedItem = items.find((user)=>user.id==sValue)

    
    document.querySelector("#singleuser").innerHTML = JSON.stringify(selectedItem)
    document.querySelector("#singleuser").style.display="block"

    
    var editBtn = document.createElement("button")
    editBtn.setAttribute("class", "btn btn-warning")
    editBtn.innerHTML = "edit"
    editBtn.setAttribute("onclick", "edituser()")
    editBtn.setAttribute("type", "button")

    document.querySelector("#singleuser").appendChild(editBtn)


  
    var deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "btn btn-danger")
    deleteBtn.innerHTML = "delete"
    deleteBtn.setAttribute("onclick", "deleteuser()") 
    deleteBtn.setAttribute("type", "button")
    document.querySelector("#singleuser").appendChild(deleteBtn)
   
}
