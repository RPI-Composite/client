import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

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

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            RPI Composite
          </Link>
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/calpage'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Calendar
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/housing'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Housing
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/dining'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dining
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/catalog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Catalog
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/options'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Options
              </Link>
            </li>
          </ul>
          {/* Button 2 (Green button) */}
          {/* {button && <Button buttonStyle='btn--outline'>Login</Button>} */}
          {/* Button 1 (blue button) */}
          {/* {btn && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
