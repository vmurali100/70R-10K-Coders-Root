import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocails'
const Header = () => {
  return (
   <header>
    <div className="container header__container">
        <h5>Hello Iam</h5>
        <h1>Vishnu Vardhan Yella</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA/>

        <HeaderSocials/>
    <div className='me'><img src={ME} alt="me" />me</div>
    <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header