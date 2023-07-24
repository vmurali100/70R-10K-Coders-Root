import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocails = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="http://github.com" target='_blank'><FaGithub/></a>
        <a href="http://twitter.com" target='_blank'><ImTwitter/></a>
        <a href="http://instagram.com" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocails