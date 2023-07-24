import React, { useState } from "react";

export const UserGender = () => {
  const [gender, setgender] = useState("");
  const hanldeChange=(e)=>{
    setgender(e.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="Gender">Gender</label> <br />
        Male
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => {
            hanldeChange(e);
          }}
        />
        <br />
        Female
        <input
          type="radio"
          checked={gender === "Female"}
          value="Female"
          onChange={(e) => {
            hanldeChange(e);
          }}
        />
        <br />
        <button>Get Gender</button>
      </form>
    </div>
  );
};
