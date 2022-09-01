import React from 'react'
import { useState } from 'react'

export const Formwithfncomp = () => {
    const [Student, setStudent] = useState({
        University: "",
        Institute: "",
        Branch: "",
        Degree: "",
        AverageCpi: "",
        Experience: "",
        YourWebsite: "",
    })

    const handleChange = (e) => {
        var input = e.target.name;
        var newStudent = { ...Student };
        newStudent[input] = e.target.value;
        setStudent(newStudent);
    }
    const handleSubmit = () => {
        console.log(Student);
    }
    const handleReset = () => {
        setStudent({
            University: "",
            Institute: "",
            Branch: "",
            Degree: "",
            AverageCpi: "",
            Experience: "",
            YourWebsite: "",
        })
    }
    return (
        <div>
            <form>
                <fieldset>
                    <legend>Registration Details </legend>
                    <label htmlFor="">University : </label>
                    <input type="text" name="University" value={Student.University} onChange={(e) => { handleChange(e) }} /> <br />
                    <label htmlFor="">Institute : </label>
                    <input type="text" name="Institute" value={Student.Institute} onChange={(e) => { handleChange(e) }} /> <br />
                    <label htmlFor="">Branch : </label>
                    <input type="text" name="Branch" value={Student.Branch} onChange={(e) => { handleChange(e) }} /> <br />
                    <label htmlFor="">Degree : </label>
                    <input type="text" name="Degree" value={Student.Degree} onChange={(e) => { handleChange(e) }} /> <br />
                    <label htmlFor="">AverageCpi : </label>
                    <input type="text" name="AverageCpi" value={Student.AverageCpi} onChange={(e) => { handleChange(e) }} /> <br />
                    <label htmlFor="">Experience : </label>
                    <input type="text" name="Experience" value={Student.Experience} onChange={(e) => { handleChange(e) }} /> <br />
                    <label htmlFor="">YourWebsite : </label>
                    <input type="text" name="YourWebsite" value={Student.YourWebsite} onChange={(e) => { handleChange(e) }} /> <br />
                    <button type="button" onClick={handleSubmit}>Add Student</button>
                    <button type="button" onClick={handleReset}>Clear</button>
                </fieldset>
            </form>
        </div>
    )
}
