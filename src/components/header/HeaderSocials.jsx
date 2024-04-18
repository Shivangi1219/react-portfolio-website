import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/shivangi-singh19/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/Shivangi1219' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials