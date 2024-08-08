import React from 'react';
import { useState } from "react";
import logoImg from "C:/Users/aasid/front-end-meta/src/Assets/Logo.svg";

function Nav() {
    const [menuOn, setMenuOn] = useState(false);

    const toggleMenu = () =>
    {
        setMenuOn(!menuOn);
    }
    return (
        <nav className={'navbar ${menuOn ? "open"  : ""}'}>
           <a href='/' className="logo">
           <img src={logoImg} alt="Little Lemon Logo" />
           </a> 
        <div className="menu-icon" onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
        
        <ul className={'nav-links ${menuOn ? "visible" : ""}'}>
            <li>
            <a href='/'> Home </a>
            </li>
            <li>
            <a href='/'> About </a>
            </li>
            <li>
            <a href='/'> Services </a>
            </li>
            <li>
            <a href='/'> Menu </a>
            </li>
            <li>
            <a href='/'> Reservation </a>
            </li>
            <li>
            <a href='/'> Order Online </a>
            </li>
            <li>
            <a href='/'> Login </a>
            </li>
        </ul>

        </nav>
    )
}
export default Nav;