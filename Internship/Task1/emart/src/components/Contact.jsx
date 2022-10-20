import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have some Questions?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <img src='/assets/bg.jpg/images5.jpg' alt='Contact Us' />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleForm" 
                                className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleForm" 
                                placeholder="full name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" 
                                className="form-label">Email Address</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" 
                                placeholder="name@example.com"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" 
                                className="form-label">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" 
                                rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact