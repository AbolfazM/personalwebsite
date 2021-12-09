import React from 'react';
import Logo from '../assists/logo.png';

const Header = () => {
    return(
        <div>
            <img src={Logo} alt="logo of website" />
            <ul className="Items">
                <li>خدمات</li>
                <li>کارها</li>
                <li>ارتباط</li>
            </ul>
        </div>
    );
}

export default Header;