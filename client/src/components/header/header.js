import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/svg/snake-icon'

import './header.scss'

const Header = ({ fillColor }) => {
  // const 
  return (
    <Link className='header' to='/'>
      <Logo className='header-logo' fillColor={fillColor} />
      {/* <h1 className={'header-title'} style={{ color: fillColor }}>S N E K</h1> */}
    </Link>
  );
}

export default Header