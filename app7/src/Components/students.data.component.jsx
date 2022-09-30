
import { useEffect } from "react";
import { Fragment } from "react";
import axios from "axios";

export const StudentsData = ({

    users,
    back,
    handleEdit,
    deleteUser,
    handleChange,

    showEdit,
    updateUser,

}) => {

    useEffect(() => {
        let url = "http://localhost:3000/user";

        axios.post(url).then((res) => {
            console.log(res.data);
              localStorage.setItem("user",JSON.stringify(res.data));

        });
    }, []);

    return (
        <Fragment>
            <div>
                <button onClick={back}>back</button>
            </div>
            <div className="students-container">
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th># ID</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {StudentsData.length > 0 &&
                                StudentsData.map((StudentsData, i) => {
                                    return <tr key={i}>
                                        <td>{StudentsData.id}</td>
                                        <td>{StudentsData.username}</td>
                                        <td>{StudentsData.email}</td>
                                        <td>{StudentsData.password}</td>
                                        <td><button className="btn btn-warning" onClick={() => { handleEdit(users, i) }}>Edit</button></td>
                                        <td><button className="btn btn-danger" onClick={() => { deleteUser(users.id) }}>Delete</button></td>
                                    </tr>
                                })}
                        </tbody>
                    </table>
                </div>
                <div>
                    {showEdit && <div style={{ margin: "20px" }}>
                        <form>
                            <label htmlFor="">ID</label>
                            <input type="text" name="id" value={users.id} onChange={(e) => { handleChange(e) }} /> <br />
                            <label htmlFor="">Email</label>
                            <input type="text" name="email" value={users.email} onChange={(e) => { handleChange(e) }} /> <br />
                            <label htmlFor="">Username</label>
                            <input type="text" name="username" value={users.username} onChange={(e) => { handleChange(e) }} /> <br />
                            <label htmlFor="">Password</label>
                            <input type="text" name="password" value={users.password} onChange={(e) => { handleChange(e) }} /> <br />

                            <button onClick={updateUser} type="button">Update User</button>
                        </form>
                    </div>
                    }
                </div>
            </div>

        </Fragment>
    )
};

export default StudentsData;