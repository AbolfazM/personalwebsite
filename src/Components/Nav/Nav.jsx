import React from 'react';
import Me from './Me';

const Nav = () => {
    return(
        <div>
            <Me />
            <div className="Name">
                <h2>I'm</h2>
                <h1>A<span>b</span>olfazl M<span>o</span>radi</h1>
            </div>
            <p className="Description">Freelancer developer on ReactJs and professional. <br />Working in Germany, Berlin.</p>
            <button className="HireMe">Hire Me</button>
        </div>
    );
}

export default Nav;