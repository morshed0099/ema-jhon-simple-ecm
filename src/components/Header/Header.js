import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />   
            <div className=''>
                <NavLink to="/Shop">Shop</NavLink>
                <NavLink to="/About">About</NavLink>
                <NavLink to="/Inventory">Inventory</NavLink>
                <NavLink to="/Order">Oder</NavLink>                
            </div>         
        </nav>
    );
};

export default Header;