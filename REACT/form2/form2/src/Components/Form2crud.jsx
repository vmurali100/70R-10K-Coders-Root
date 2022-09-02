import React, { useState } from "react";

export const Form2crud = () => {
  const [user, setuser] = useState({
    id: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: ""
  });
  const [users, setusers] = useState([]);
  const [index, setindex] = useState(0);

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setuser(newUser);
  };
  const handleSubmit = () => {
    console.log(user);
    let newUsers = [...users];
    newUsers.push(user);
    setusers(newUsers);
    clearForm();
  };

  const clearForm = () => {
    setuser({
      id: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: ""
    });
  };

  const deleteUser = (street) => {
    let newUsers = users.filter((myUser) => myUser.street !== street);
    setusers(newUsers);
  };

  const handleEdit = (myUser, i) => {
    setuser(myUser);
    setindex(i);
  };

  const updateUser = () => {
    let newUsers = [...users];
    newUsers[index] = user;
    setusers(newUsers);
    clearForm();
  };
  const { id, street, city, state, zipcode, country } = user;
  return (
    <div>
      <h1>Address</h1>
      <hr />
      {/* <form class="row g-3">
  <div class="col-md-6">
    <label for="id" class="form-label">ID</label>
    <input type="text" name="id" value={id} OnChange={(e) => {
            handleChange(e);
          }}/>{" "}
  </div>
  
  <div class="col-12">
    <label for="street" class="form-label">Street</label>
    <input type="text" class="form-control" id="street" placeholder="1234 Main St" onChange={(e) => {
            handleChange(e);
          }}/>{" "}
  </div>
 
  <div class="col-md-6">
    <label for="city" class="form-label">City</label>
    <input type="text" class="form-control" id="city" onChange={(e) => {
            handleChange(e);
          }}/>{" "}
  </div>
  <div class="col-md-4">
    <label for="state" class="form-label">State</label>
    <select id="state" class="form-select" onChange={(e) => {
            handleChange(e);
          }}>{" "}
      <option selected>Choose...</option>
      <option>AP</option>
      <option>TS</option>
      <option>KA</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="zipcode" class="form-label">Zip code</label>
    <input type="text" class="form-control" id="zipcode" onChange={(e) => {
            handleChange(e);
          }}/>{" "}
  </div>
  <div class="col-md-6">
    <label for="country" class="form-label">Country</label>
    <input type="text" class="form-control" id="country" onChange={(e) => {
            handleChange(e);
          }}/>{" "}
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" onChange={(e) => {
            handleChange(e);
          }}/>{" "}
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <br />
       <div> <button
          type="button"
          class="btn btn-info"
          onClick={() => {
            handleSubmit();
          }}
        >
          Add User
        </button>
        <button
          onClick={updateUser}
          type="button"
          class="btn btn-success"
        >
          Update User
        </button>
        </div>
        <hr />
</form> */}
      <form>
        <label htmlFor="">ID: </label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Street:</label>
        <input
          type="text"
          name="street"
          value={street}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <input
          type="text"
          name="street"
          value={street}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">State: </label>
        <input
          type="text"
          name="state"
          value={state}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Zip code: </label>
        <input
          type="text"
          name="zipcode"
          value={zipcode}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <label htmlFor="">Country: </label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <br />
        <button
          type="button"
          class="btn btn-info"
          onClick={() => {
            handleSubmit();
          }}
        >
          Add User
        </button>
        <button
          onClick={updateUser}
          type="button"
          class="btn btn-success"
        >
          Update User
        </button>
        <hr />
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Street</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Zip code</th>
            <th scope="col">Country</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.street}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zipcode}</td>
                <td>{user.country}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      handleEdit(user, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteUser(user.street);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
