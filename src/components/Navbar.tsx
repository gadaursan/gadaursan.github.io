import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.scss'
import { PAGES } from '../pages/Page-DB'
import profileImg from '../static/sissel img.png'

const Navbar = () => {
  const links = PAGES.filter(page => !!page.isNavbar)
    .map((page) => (
      <NavLink
        to={page.to}
        key={page.to}
      >
        {page.label}
      </NavLink>
    )
  )

  return (
    <div className='navContainer'>
      <NavLink className='homeIcon' to='/'>
        <img src={profileImg} alt='profile icon'/>
      </NavLink>
      <div className='navList'>
        {links}
      </div>
    </div>
  )
}

export default Navbar
