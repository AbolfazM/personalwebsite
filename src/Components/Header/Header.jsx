import React, {useState} from 'react';
import HamberMenu from './HamberMenu';
import Logo from '../assists/logo.png';
import Hamber from '../assists/hamber.svg';

const Header = () => {

    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    return(
        <div>
            <img className="Logo" src={Logo} alt="logo of website" />
            <ul className="Items">
                <li>Service</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
            <img onClick={handleMenu} className="HamberMenu" src={Hamber} alt="hamberger menu" />
            {
                menu ? <HamberMenu /> : null
            }
        </div>
    );
}

export default Header;