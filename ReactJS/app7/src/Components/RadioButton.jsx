import React,{useState} from 'react'

export const RadioButton = () => {
    const [gender, setgender] = useState("");

    const handleChange =(e)=>{
        setgender(e.target.value);
    }
    const getData=()=>{
        console.log(gender);
    }
  return (
    <div>
        <form >
            <label htmlFor="">Male</label>
            <input type="radio" value="Male" checked={gender === "Male"} onChange={(e)=>{handleChange(e)}}/> <br />
            <label htmlFor="">Female</label>
            <input type="radio" value="Female" checked={gender === "Female"} onChange={(e)=>{handleChange(e)}}/> <br />
            <button type="button" onClick={getData}>GetGender</button>
        </form>
    </div>
  )
}


     // same output
// import React, { useState } from "react";

// export const RadioButton = () => {
//   const [gender, setgender] = useState("");
//   const hanldeChange=(e)=>{
//     setgender(e.target.value)
//   }

//   const getGender=()=>{
//     console.log(gender);
//   }
//   return (
//     <div>
//       <form>
//         <label htmlFor="Gender">Gender</label> <br />
//         Male
//         <input
//           type="radio"
//           value="Male"
//           checked={gender === "Male"}
//           onChange={(e) => {
//             hanldeChange(e);
//           }}
//         />
//         <br />
//         Female
//         <input
//           type="radio"
//           checked={gender === "Female"}
//           value="Female"
//           onChange={(e) => {
//             hanldeChange(e);
//           }}
//         />
//         <br />
//         <button type="button" onClick={getGender}>Get Gender</button>
//       </form>
//     </div>
//   );
// };

