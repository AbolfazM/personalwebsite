import React from 'react';
import Logo from '../assists/logo.png';

const Header = () => {
    return(
        <div>
            <img className="Logo" src={Logo} alt="logo of website" />
            <ul className="Items">
                <li>service</li>
                <li>works</li>
                <li>contact</li>
            </ul>
        </div>
    );
}

export default Header;