import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Girl from '../../assets/girl_avatar.png'

const Header = () => {
  return (
   <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shivangi Singh</h1>
        <h5 className="text-light">I am a Fullstack Developer</h5>

        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Girl} alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
   </header>
  )
}

export default Header