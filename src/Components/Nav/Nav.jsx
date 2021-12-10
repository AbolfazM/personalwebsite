import React from 'react';
import Me from './Me';

const Nav = () => {
    return(
        <div>
            <Me />
            <div className="Name">
                <h2>I'm</h2>
                <h1>Abolfazl Moradi</h1>
            </div>
            <p className="Description">Freelancer developer on ReactJs and professional. <br />Working in Germany, Berlin.</p>
            {/* <button className="HireMe">Hire Me</button> */}
        </div>
    );
}

export default Nav;