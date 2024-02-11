import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InputIcon from '@mui/icons-material/Input';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import { useUser } from "../../lib/context/user";


function Navbar() {
    const user = useUser();

    return (
        <>
            <nav>
                <ul>
                    <li className='nav-list'><Link to="/" className='nav-item'><HomeIcon />Home</Link></li>
                    <li className='nav-list'><Link to="/ask-gpt" className='nav-item'><SmartToyIcon />Ask GPT</Link></li>
                    {user.current ? (
                        <>
                            <li className='nav-list'><Link to="/add-idea" className='nav-item'><InputIcon />Add Idea</Link></li>
                            <li className='nav-list'><span type='button' className='nav-item' onClick={() => user.logout()}><LogoutIcon />Logout</span></li>
                        </>
                    ) :
                        <li className='nav-list'><Link to="/login" className='nav-item'><LoginIcon />Login</Link></li>
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar;