var users = [ {
    id: 8,
    email: "LPointelin@tempor.gov",
    username: "RLazier",
    password: "1giV0",
  },
  {
    id: 9,
    email: "TMatthews@elit.io",
    username: "EAuthier",
    password: "h1MLY",
  },
  {
    id: 10,
    email: "GPierce@tincidunt.net",
    username: "PHaugland",
    password: "HRaWb",
  }];

function addUser() {
    var user = {
      id: document.getElementById("id").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    users.push(user);
    displayUsers();
    clearTable()
  }