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