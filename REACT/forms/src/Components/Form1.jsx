import React, { useState } from "react";

export const Form1 = () => {
  const [person, setperson] = useState({
    street: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    var inputname = e.target.name;
    var newPerson = { ...person };
    newPerson[inputname] = e.target.value;
    setperson(newPerson);
    // setfirstname(e.target.value)
  };
  const handleSubmit = () => {
    console.log(person);
  };
  const handleClear = () => {
    setperson({
      street: "",
      city: "",
      state: "",
      zipcode: "",
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Address</h1>
      <hr />
      <form onSubmit={ onSubmit }>
        <label htmlFor="street">Street</label>
        <input
          type="textarea"
          name="street"
          value={person.street}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="city">CITY</label>
        <input
          type="text"
          name="city"
          value={person.city}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="state">STATE</label>
        <input
          type="text"
          name="state"
          value={person.state}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <label htmlFor="zipcode">Zip code</label>
        <input
          type="text"
          name="zipcode"
          value={person.zipcode}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <br />
        <button onClick={handleSubmit} type="submit">
          OK
        </button>
        <button onClick={handleClear} type="button">
          CANCEL
        </button>
      </form>
    </div>
  );
};
