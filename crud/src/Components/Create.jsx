import React from 'react'

const Create = () => {

  submit=
  return (
    <div>
        <h2>Create</h2>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="button" className="btn btn-primary"onClick={submit}>Submit</button>
</form>

    </div>
  )
}

export default Create