import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { HiMenu } from "react-icons/hi";
import '../components/Navbar.css';
import { IoClose } from "react-icons/io5";
import { Button } from './Button';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);



  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=> {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  

  return (
    <>
        <nav className= 'navbar'>
            <div className='navbar-container'>
                <Link to= '/' className='navbar-logo' onClick={closeMobileMenu}>
                <img src={logo} alt='Logo' style={{ height: '60px' }} />
                </Link>
                <div className='menu-icon' onClick={handleClick} >
                   {click ? <IoClose color="white" size={30}/> : <HiMenu color="white" size={30} />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item'>
                      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                         Home
                      </Link>
                    </li>     
                    <li className='nav-item'>
                      <Link to='/lineup' className='nav-links' onClick={closeMobileMenu}>
                         Lineup
                      </Link>
                    </li> 
                    <li className='nav-item'>
                      <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                         Schedule
                      </Link>
                    </li> 
                    <li className='nav-item'>
                      <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                         Gallery
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/tickets' className='nav-links-mobile' onClick={closeMobileMenu}>
                         Tickets
                      </Link>
                    </li> 
                         
                </ul>
                {button && <Button buttonStyle='btn--outline'>TICKETS</Button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar;
