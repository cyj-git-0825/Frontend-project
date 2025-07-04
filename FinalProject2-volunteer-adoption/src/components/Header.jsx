import React, { useState } from 'react';
import './Header.css';
import './Theme.css';

import SunIcon from '../assets/images/icons-sun.png';
import MoonIcon from '../assets/images/icons-moon.png';

function Header({ setPage }) {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [theme, setTheme] = useState('light'); // Default theme
    const [activePage, setActivePage] = useState('Home'); // Track active page

    function toggleNav() {
        setIsNavVisible(!isNavVisible);
    }

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme; 
    };
    
    function go(event, page) {
        event.preventDefault();
        setPage(page);
        setActivePage(page); 
        setIsNavVisible(false);
    }

    return (
        <header className="header">
            <div className="header__name">
                <h1 className='header__title'>Pawsitively Cats</h1>
            </div>

            <button className="nav__toggle" aria-label="toggle navigation" onClick={toggleNav}>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            
            <nav>
                <ul className={`navbar ${isNavVisible ? 'nav__visible' : ''}`}>
                    <li className={`nav__item ${activePage === 'Home' ? 'nav__item--active' : ''}`}>
                        <a href="" onClick={(e) => go(e, "Home")}>Home</a>
                    </li>
                    <li className={`nav__item ${activePage === 'Cats' ? 'nav__item--active' : ''}`}>
                        <a href="" onClick={(e) => go(e, "Cats")}>Our Cats</a>
                    </li>  
                    <li className={`nav__item ${activePage === 'AdoptionInfo' ? 'nav__item--active' : ''}`}>
                        <a href="" onClick={(e) => go(e, "AdoptionInfo")}>Adoption Info</a>
                    </li>  
                    <li className={`nav__item ${activePage === 'Contact' ? 'nav__item--active' : ''}`}>
                        <a href="" onClick={(e) => go(e, "Contact")}>Contact</a>
                    </li>
                    <li className='nav__item'>
                        <div className='theme__item'>
                            <span className="theme__text">Mode</span>
                            <label className="switch">
                                <input type="checkbox" onClick={toggleTheme} />
                                <span className="slider round">
                                    <span className="emoji">
                                        <img 
                                            alt="A sun icon for light theme or a moon icon for dark theme" 
                                            src={theme === 'light' ? SunIcon : MoonIcon} 
                                        />
                                    </span>
                                </span>
                            </label>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;