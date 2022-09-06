import React from "react";
import { useState } from "react";

export const CreateDating = () => {

    const [dating, setdating] = useState({
        id: "",
        userName: "",
        password: "",
        email: ""
    })

    const [datingArr, setdatingArr] = useState([])

    const { id, userName, password, email } = dating;

    const [index, setindex] = useState(0);

    const handleChange = (e) => {
        let newDating = { ...dating };
        newDating[e.target.name] = e.target.value;
        setdating(newDating);
    }

    const addUser = () => {
        let newDatingArr = [...datingArr];
        newDatingArr.push(dating);
        setdatingArr(newDatingArr);
        clearform();
    }

    const deleteUser = (id) => {
        let newDatingArr = datingArr.filter((b) => b.id !== id);
        setdatingArr(newDatingArr);
    }

    const editUser = (c, i) => {
        setdating(c);
        setindex(i);
    }

    const updateUser = () => {
        let newDatingArr = [...datingArr];
        newDatingArr[index] = dating;
        setdatingArr(newDatingArr);
        clearform();
    }

    const clearform = () => {
        setdating({
            id: "",
            userName: "",
            password: "",
            email: ""
        })
    }

    const [datingDD, setdatingDD] = useState(["I am a man", "I am an women"]);

    const [selectedDatingDD, setselectedDatingDD] = useState("")

    const getDatingDD = (e) => {
        setselectedDatingDD(e.target.value);
        console.log(e.target.value)
    }

    const [datingDDTwo, setdatingDDTwo] = useState(["I want to find women", "I want to find men"])

    const [selectedDatingDDTwo, setselectedDatingDDTwo] = useState('')

    const getDatingDDTwo = (e) => {
        setselectedDatingDDTwo(e.target.value)
        console.log(e.target.value)
    }

    

    const generateYearOptions = () => {
        const arr = [];

        const startYear = 1900;
        const endYear = new Date().getFullYear();

        for (let i = endYear; i >= startYear; i--) {
            arr.push(<option value={i}>{i}</option>);
        }

        return arr;
    };

    

    const [selectedyear, setselectedyear] = useState('')

    const getDob=(e)=>{
         setselectedyear(e.target.value)
    }


    const [month, setmonth] = useState(["Month","January","February","March","April","May","June","July","August","September","October","November","December"]);
     
    const [selectedMonth, setselectedMonth] = useState('')

    const getMonth=(e)=>{
        setselectedMonth(e.target.value)
    }

    return (
        <div>
            <form>
                <label htmlFor="">ID:</label>
                <input type="text" name="id" value={id} onChange={(e) => handleChange(e)} /> <br />

                <label htmlFor="">Username:</label>
                <input type="text" name="userName" value={userName} onChange={(e) => handleChange(e)} /> <br />

                <label htmlFor="">Password:</label>
                <input type="text" name="password" value={password} onChange={(e) => handleChange(e)} /> <br />

                <label htmlFor="">Email:</label>
                <input type="text" name="email" value={email} onChange={(e) => handleChange(e)} /> <br />

                <select value={selectedDatingDD} onChange={(e) => { getDatingDD(e) }}>
                    {datingDD.map((dd, i) => (
                        <option value={dd} key={i}>{dd}</option>
                    ))}
                </select> <br />

                <select value={selectedDatingDDTwo} onChange={(e) => { getDatingDDTwo(e) }}>
                    {datingDDTwo.map((ddt, i) => (
                        <option value={ddt} key={i}>{ddt}</option>
                    ))}
                </select> <br />

                <label htmlFor="">Date Of Birth</label> <br />

                <select onChange={(e)=>{getDob(e)}} value={selectedyear}>
                    <option value='0'>Year</option>
                    {generateYearOptions()}
                </select>

                <select value={selectedMonth} onChange={(e) => { getMonth(e) }}>
                    {month.map((mth, i) => (
                        <option value={mth} key={i}>{mth}</option>
                    ))}
                </select> <br />

                 <br/>

                <button type="button" onClick={addUser}>Add</button>
                <button type="button" onClick={updateUser}>Update</button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {datingArr.map((a, i) => {
                        return <tr key={i}>
                            <td>{a.id}</td>
                            <td>{a.userName}</td>
                            <td>{a.password}</td>
                            <td>{a.email}</td>
                            <td><button type="button" className="btn btn-warning" onClick={() => { editUser(a, i) }}>Edit</button></td>
                            <td><button type="button" className="btn btn-danger" onClick={() => { deleteUser(a.id) }}>Delete</button></td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}