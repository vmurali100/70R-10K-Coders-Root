import React, { useState } from 'react'


export const DropDown = () => {
    const [selectedSubjects, setselectedSubjects] = useState(["HTML","CSS","JS","ReactJS"]);
    const [subject, setsubject] = useState("");

    const handleChange=(e)=>{                         
        setsubject(e.target.value);
    }
  return (
    <div>
        <select name="" id="" value ={subject} onChange={(e)=>{handleChange(e)}} >
            {selectedSubjects.map((sub,i)=>(
                 <option value={sub} key={i}>{sub}</option>
            ))}
        </select>
    </div>
  )
}


// import React, { useState } from "react";

// export const DropDown = () => {
//   const [subjects, setsubjects] = useState(["HTML", "CSS", "JS", "ReactJS"]);
//   const [selectedSubject, setselectedSubject] = useState("");

//   const getSubject = (e) => {
//     setselectedSubject(e.target.value);
//     console.log(e.target.value);
//   };
//   return (
//     <div>
//       <select
//         value={selectedSubject}
//         onChange={(e) => {
//           getSubject(e);
//         }}
//       >
//         {subjects.map((sub, i) => (
//           <option value={sub} key={i}>
//             {sub}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };
