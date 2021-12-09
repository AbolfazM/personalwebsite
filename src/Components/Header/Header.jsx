import React from 'react';
import Logo from '../assists/logo.png';
import Hamber from '../assists/hamber.svg';

const Header = () => {
    return(
        <div>
            <img className="Logo" src={Logo} alt="logo of website" />
            <ul className="Items">
                <li>Service</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
            <img className="HamberMenu" src={Hamber} alt="hamberger menu" />
        </div>
    );
}

export default Header;