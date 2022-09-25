import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />   
            <div className=''>
                <a href="/Shop">Shop</a>
                <a href="/About">About</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Order">Oder</a>                
            </div>         
        </nav>
    );
};

export default Header;