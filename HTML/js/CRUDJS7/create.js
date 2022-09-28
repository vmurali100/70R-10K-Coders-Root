function adduser() {
    var users3 = {
        fname: document.getElementById("inputfname").value,
        lname: document.getElementById("inputlname").value,
        tel: document.getElementById("inputtel").value,
        address: document.getElementById("inputaddress").value,
        city: document.getElementById("inputcity").value,
        state: document.getElementById("inputstate").value,
        zip: document.getElementById("inputzip").value

    };
    users.push(users3);
    user1();
    cleartable();
};