import React from 'react';
import {Link} from 'react-router-dom';

import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <header>
        <div className='logo-container'>
            <Link to="/" className='logo'><TipsAndUpdatesIcon />Idea Tracker</Link>
        </div>
        <div className='navbar-container'>
            <Navbar />
        </div>
    </header>
  )
}

export default Header;