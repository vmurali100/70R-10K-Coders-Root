import React, { useState } from "react";

export const DropDown = () => {
  const [subjects, setsubjects] = useState(["HTML", "CSS", "JS", "ReactJS"]);
  const [selectedSubject, setselectedSubject] = useState("");

  const getSubject = (e) => {
    setselectedSubject(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <select
        value={selectedSubject}
        onChange={(e) => {
          getSubject(e);
        }}
      >
        {subjects.map((sub, i) => (
          <option value={sub} key={i}>
            {sub}
          </option>
        ))}
      </select>
    </div>
  );
};
