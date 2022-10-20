import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>
              About Us
            </h1>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores deleniti, 
              nam necessitatibus neque itaque animi facere distinctio fugit ad vero molestiae 
              placeat blanditiis vitae dolores unde odio. Non repudiandae sequi excepturi magni 
              odit similique velit nisi deleniti, ratione placeat sit, est expedita reiciendis 
              aliquam, ipsam repellendus culpa nobis facilis perspiciatis sed tempora quis? 
              Error amet quam eos, dolore numquam dolorum omnis ad enim sit! Magni mollitia nostrum, 
              odit, placeat reiciendis odio aspernatur laboriosam velit repellat quidem facere perferendis 
              repudiandae rerum fugiat quis impedit vel praesentium porro beatae delectus vitae minima 
              provident? Illum pariatur dolor ab dolorem deserunt minima delectus dicta!
            </p>
            <NavLink to= "/contact" className="btn btn-outline-primary">Contact Us</NavLink>
          </div>
          {/* <div className="col-md-6">
            <img src="/assets/bg.jpg/images2.jpg" alt='About Us' height="400px" width="400px" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default About