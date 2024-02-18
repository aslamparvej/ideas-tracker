import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import Navbar from '../navbar/Navbar';

const Header = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  return (
    <header>
        <div className='logo-container'>
            <Link to="/" className='logo'><TipsAndUpdatesIcon />Idea Tracker</Link>
        </div>
        <div className='navbar-container'>
            <Navbar />
        </div>
        <div className='hamburger-menu-container'>
          <div className='hamburger-menu' onClick={()=> setOpenSideMenu(!openSideMenu)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={openSideMenu ? "hamburger-menu-list-container open-sidemenu" : "hamburger-menu-list-container"}>

          </div>
        </div>
    </header>
  )
}

export default Header;