import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { IconMenu2, IconArrowLeft } from '@tabler/icons-react';
import {Button} from './Button';
import './Navbar.css';


function Navbar() {
  const [click, setClick]= useState(false);
  const [button,setButton]= useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth<=960){
        setButton(false);
    }
    else{
        setButton(true);
    }
  }
  window.addEventListener('resize',showButton);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
           <Link to='/home' className='navbar-logo'>
           <a className='logo'>S K MANAGEMENT</a>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
           {click ? <IconArrowLeft className='backArrow'/>:<IconMenu2 className='menu'/>}
          </div>
          <ul className={click? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    About
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Services
                </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
        </div>
    </nav>
    </>
  )
}

export default Navbar
