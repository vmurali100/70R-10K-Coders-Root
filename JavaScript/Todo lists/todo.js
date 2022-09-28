document.getElementById("add").onclick = function () {
    if (document.querySelector('#tasks input').value.length == 0) {
        alert("Please add the todo list")
    }
    else {
        document.getElementById("visible-area").innerHTML += `
        <div class="task">

       
        <span id="taskname">
            ${document.querySelector('#tasks input').value}
            ${document.querySelector('#tasks input').value=''}
        </span>

        <button class="edit">
        <i class="fa-thin fa-pen-to-square"></i>
        </button>
        
        <button class="delete">
        <i class="fa fa-trash" aria-hidden="true"></i>
        </button>

    </div>`
    }

    var total_tasks = document.querySelectorAll(".delete");
    console.log(total_tasks)
        for(var i=0; i<total_tasks.length; i++){
            console.log(total_tasks[i])
            total_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var total_tasks = document.querySelectorAll(".edit");
        for(var i=0; i<total_tasks.length; i++){
            total_tasks[i].onclick = function(){
                var text = document.getElementById("taskname")
                document.querySelector('#tasks input').value = text.innerHTML
            }
        }

}