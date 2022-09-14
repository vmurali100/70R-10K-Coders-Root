import React, { useState } from "react";

export const User = () => {
  // const [firstName, setfirstName] = useState("");
  const [person, setperson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChane = (e) => {
    console.log(e.target.value);
    var inputname = e.target.name;
    var newPerson = { ...person };
    newPerson[inputname] = e.target.value;
    setperson(newPerson);
    // setfirstName(e.target.value)
  };
  const handleSubmit = () => {
    console.log(person);
  };
  return (
    <div>
      <form>
        <label htmlFor="firstName">First Name : </label>
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={(e) => {
            handleChane(e);
          }}
        />{" "}
        <br />
        <label htmlFor="lastName"> Last Name : </label>
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={(e) => {
            handleChane(e);
          }}
        />{" "}
        <br />
        <label htmlFor="email"> Email: </label>
        <input
          type="text"
          name="email"
          value={person.email}
          onChange={(e) => {
            handleChane(e);
          }}
        />{" "}
        <br />
        <button onClick={handleSubmit} type="button">
          Add User
        </button>
      </form>
    </div>
  );
};
