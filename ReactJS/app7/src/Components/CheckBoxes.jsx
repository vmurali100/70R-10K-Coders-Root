import React,{useState} from 'react'

export const CheckBoxes = () => {
const [selectedSubjects, setselectedSubjects] = useState([])

    const getSelectedValues  =()=>{
        console.log(selectedSubjects);
    }

    const handleChange=(e)=>{
        let newselectedsub = [...selectedSubjects];
        // if ( newselectedsub.includes(e.target.value)){
        // setselectedSubjects( newselectedsub.filter((val)=> val !== e.target.value ));
        // }else {
            newselectedsub.push(e.target.value);
            setselectedSubjects(newselectedsub);}
    //       }
    // }
  return (
    <div>
        <form>
            <label htmlFor="">Subjects</label><br /><br />
            <input type="checkbox" value={"HTML"} checked={selectedSubjects.includes("HTML")} onChange={(e)=>{handleChange(e)}}/>HTML <br />            
            <input type="checkbox" value={"CSS"} checked={selectedSubjects.includes("CSS")} onChange={(e)=>{handleChange(e)}}/>CSS <br />
            <input type="checkbox" value={"JS"} checked={selectedSubjects.includes("JS")} onChange={(e)=>{handleChange(e)}}/>JS <br />
            <input type="checkbox" value={"ReactJS"} checked={selectedSubjects.includes("ReactJS")} onChange={(e)=>{handleChange(e)}}/>ReactJS <br />
            <button type="button" onClick={getSelectedValues}>
          GET
        </button>
        </form>
    </div>
  )
}

// import React, { useState } from "react";

// export const CheckBoxes = () => {
//   const [selectedSubjects, setselectedSubjects] = useState([]);

//   const getSelectedValues = () => {
//     console.log(selectedSubjects);
//   };

//   const handleChange = (e) => {
//     const newSelected = [...selectedSubjects];
//     if (newSelected.includes(e.target.value)) {
//       setselectedSubjects(newSelected.filter((val) => val !== e.target.value));
//     } else {
//       newSelected.push(e.target.value);
//       setselectedSubjects(newSelected);
//     }
//   };

//   return (
//     <div>
//       <form>
//         <label htmlFor="Subjects">Subjects</label> <br /> <br />
//         <input
//           type="checkbox"
//           checked={selectedSubjects.includes("HTML")}
//           value={"HTML"}
//           onChange={(e) => {
//             handleChange(e);
//           }}
//         />{" "}
//         HTML <br />
//         <input
//           type="checkbox"
//           checked={selectedSubjects.includes("CSS")}
//           value={"CSS"}
//           onChange={(e) => {
//             handleChange(e);
//           }}
//         />{" "}
//         CSS <br />
//         <input
//           type="checkbox"
//           checked={selectedSubjects.includes("JS")}
//           value={"JS"}
//           onChange={(e) => {
//             handleChange(e);
//           }}
//         />{" "}
//         JS <br />
//         <input
//           type="checkbox"
//           checked={selectedSubjects.includes("ReactJS, HTML,CSS,JS")}
//           value={"ReactJS, HTML,CSS,JS"}
//           onChange={(e) => {
//             handleChange(e);
//           }}
//         />{" "}
//         ReactJS <br />
//         <button type="button" onClick={getSelectedValues}>
//           GET
//         </button>
//       </form>
//     </div>
//   );
// };
