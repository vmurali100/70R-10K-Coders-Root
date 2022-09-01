import React from "react"
import { useState } from "react";

export const CreateStudent = () => {
    const [student, setstudent] = useState({
        id:"",
        university: "",
        institute: "",
        website: ""
    });

    const { id, university, institute, website } = student;


    const [stuDetails, setstuDetails] = useState([]);

    const clearform = () => {
        setstudent({
            id:"",
            university: "",
            institute: "",
            website: ""

        })
    }

    const handleChange = (e) => {
        let newStudent = { ...student }
        newStudent[e.target.name] = e.target.value;
        setstudent(newStudent);
    };

    const handleDelete=(id)=>{
        let newStuDetails = stuDetails.filter((mystu)=> mystu.id !== id);
        setstuDetails(newStuDetails)

    }

    const [index,setindex] = useState(0)


    const handleEdit=(myStudent,i)=>{
        setstudent(myStudent)
        setindex(i)
    }

    const handleAdd=()=>{
        let newStuDetails = [...stuDetails]
        newStuDetails.push(student);
        setstuDetails(newStuDetails)
        clearform();
    }

    const handleUpdate=()=>{
        let newStuDetails = [...stuDetails]
        newStuDetails[index] = student;
        setstuDetails(newStuDetails);
        clearform()
    }




    return (
        <div>
            <form>

                <label htmlFor="">Id: </label>
                <input type="text" name="id" value={id} onChange={(e) => { handleChange(e) }} /> <br />


                <label htmlFor="">University Name: </label>
                <input type="text" name="university" value={university} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">Institute Name : </label>
                <input type="text" name="institute" value={institute} onChange={(e) => { handleChange(e) }} /> <br />

                <label htmlFor="">College Website : </label>
                <input type="text" name="website" value={website} onChange={(e) => { handleChange(e) }} /> <br />

                <button onClick={handleAdd} type="button">Add Student</button>
                <button onClick={handleUpdate} type="button">Update Student</button>

            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>University</th>
                        <th>Institute</th>
                        <th>Website URL</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {stuDetails.map((student, i) => {
                        return <tr key={i}>
                            <td>{student.id}</td>
                            <td>{student.university}</td>
                            <td>{student.institute}</td>
                            <td>{student.website}</td>
                            <td><button className="btn btn-warning" type="button" onClick={() => { handleEdit(student, i) }}>Edit</button></td>
                            <td><button className="btn btn-danger" type="button" onClick={() => { handleDelete(student.id) }}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>


        </div>
    )

}