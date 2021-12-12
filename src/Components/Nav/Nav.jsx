import React from 'react';
import Me from './Me';

const Nav = () => {
    return(
        <div>
            <Me />
            <div data-aos="fade-down" className="Name">
                <h2>I'm</h2>
                <h1>A<span>b</span>olfazl M<span>o</span>radi</h1>
            </div>
            <p data-aos="fade-up" className="Description">Freelancer developer on ReactJs and professional. <br />Working in Germany, Berlin.</p>
            <button data-aos="fade-up" className="HireMe">Hire Me</button>
        </div>
    );
}

export default Nav;