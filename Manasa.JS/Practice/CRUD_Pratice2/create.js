var user = 
    [
        {
            "Age": 30,
            "Email": "O@gmail.com",
            "HomeTown": "yulu",
            "Name": "John",
            "Gender": "Male",
        },
        {
            "Age": 31,
            "Email": "M@gmail.com",
            "HomeTown": "Lola",
            "Name": "Hena",
            "Gender": "Female",
        },
        {
            "Age": 32,
            "Email": "N@gmail.com",
            "HomeTown": "Nasa",
            "Name": "Pana",
            "Gender": "Male",
        },
        
];


function adduser() {

    var user = {

        Age: document.getElementById("Age").value,
        Email: document.getElementById("Email").value,
        HomeTown: document.getElementById("HomeTown").value,
        Name: document.getElementById("Name").value,
        Gender: document.getElementById("Gender").value,
      
    }

    user.push(user)
    displayuser()

    clearform()

}