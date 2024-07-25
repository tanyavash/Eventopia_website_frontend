import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';
import { HiMenu } from "react-icons/hi";
import '../components/Navbar.css';
import { IoClose } from "react-icons/io5";
import { Button } from './Button';
import { FiLogIn } from "react-icons/fi";

function Navbar({ user }) {
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

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt='Logo' style={{ height: '60px' }} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <IoClose color="white" size={30} /> : <HiMenu color="white" size={30} />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            {!user ? (
              <>
                <li className='nav-item'>
                  <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <>
                {user.isAdmin && (
                  <li className='nav-item'>
                    <Link to='/admin' className='nav-links' onClick={closeMobileMenu}>
                      Admin
                    </Link>
                  </li>
                )}
                <li className='nav-item'>
                  <span className='nav-links' onClick={() => {
                    // Handle logout functionality
                    // Clear user data and redirect to home page
                  }}>
                    Logout
                  </span>
                </li>
              </>
            )}
          </ul>
          {button && <Button buttonStyle='btn--outline'>TICKETS</Button>}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
