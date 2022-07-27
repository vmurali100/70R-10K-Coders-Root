function validate() {
    var idvalue = document.getElementById("id").value;
    console.log(idvalue)
    if (idvalue.length > 0) {
        document.getElementById("id").removeAttribute("disabled")
    } else {
        document.getElementById("id").setAttribute("disabled", true)

    }
}