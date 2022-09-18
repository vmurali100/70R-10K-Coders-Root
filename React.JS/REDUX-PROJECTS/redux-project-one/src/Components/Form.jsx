import React from 'react'

export const Form = ({btnText}) => {
  return (
    <div className="container">

    <form>

        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
            <input type="email" className="form-control"  />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="email" className="form-control"  />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
            <input type="email" className="form-control"  />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control"  />
        </div>



        <button type="button" className="btn btn-primary">{btnText}</button>
    </form>

</div>
  )
}
