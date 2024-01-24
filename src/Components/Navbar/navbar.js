import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import ContactImg from '../../assets/contact.png';
import Menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
            <Link className='desktopMenuList' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            <Link className='desktopMenuList' activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
            <Link className='desktopMenuList' activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
            <Link className='desktopMenuList' activeClass='active' to='github' spy={true} smooth={true} offset={-100} duration={500}>Github</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
          }}>
          <img className='desktopMenuImg' src= { ContactImg } alt="ContactImage" />
          Contact Me
        </button>
        <img className='mobMenu' src= {Menu} alt="" onClick={() => setShowMenu(!showMenu)} />
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
          <Link className='listItem' activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>Home</Link>
          <Link className='listItem' activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>About</Link>
          <Link className='listItem' activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>Portfolio</Link>
          <Link className='listItem' activeClass='active' to='github' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>Github</Link>
          <Link className='listItem' activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar;
