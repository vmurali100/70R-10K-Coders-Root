import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsappr} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <SiGmail/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target='_blank' >Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger/>
            <h4>Twitter</h4>
            <h5>Nag</h5>
            <a href="mailto:dummyegator@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+918790199645" target='_blank'>Send a Message</a>
          </article>






















































































          
        </div>
      </div>
    </section>
  )
}

export default Contact