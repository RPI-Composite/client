import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

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
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className={`nav-item ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleClick('Home')}>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className={`nav-item ${activeTab === 'Calendar' ? 'active' : ''}`} onClick={() => handleClick('Calendar')}>
              <Link
                to='/calpage'
                className='nav-links'
              >
                Calendar
              </Link>
            </li>
            <li className={`nav-item ${activeTab === 'Housing' ? 'active' : ''}`} onClick={() => handleClick('Housing')}>
              <Link
                to='/housing'
                className='nav-links'
              >
                Housing
              </Link>
            </li>
            <li className={`nav-item ${activeTab === 'Dining' ? 'active' : ''}`} onClick={() => handleClick('Dining')}>
              <Link
                to='/dining'
                className='nav-links'
              >
                Dining
              </Link>
            </li>
            <li className={`nav-item ${activeTab === 'Catalog' ? 'active' : ''}`} onClick={() => handleClick('Catalog')}>
              <Link
                to='/catalog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Catalog
              </Link>
            </li>
            <li className={`nav-item ${activeTab === 'CS Template' ? 'active' : ''}`} onClick={() => handleClick('CS Template')}>
              <Link
                to='/cstemplate'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CS Template
              </Link>
            </li>
            <li className={`nav-item ${activeTab === 'Other Help' ? 'active' : ''}`} onClick={() => handleClick('Other Help')}>
              <Link
                to='/otherhelp'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Other Help
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