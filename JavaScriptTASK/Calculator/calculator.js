function view(num) {
    document.getElementById("result").value += num /*+=concadination occurs by using view fun at every point*/
}

function compute() { //overal resolution expression
    let x = document.getElementById("result").value
    let y = eval(x) //accepts the  string result and gives to y
    document.getElementById("result").value = y //we need to evaluate back to text.
}

function clr() {
    document.getElementById("result").value = ""
}