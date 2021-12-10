import React from 'react';
import MyImg from '../assists/me.png';
import Telegram from '../assists/telegram.png';
import Spotify from '../assists/spotify.png';
import Dribbble from '../assists/dribbble.png';

const Me = () => {
    return(
        <div>
            <img className="Me" src={MyImg} alt="my img" />
            <div>
                <img className="Social Telegram" src={Telegram} alt="telegram account" />
                <img className="Social Spotify" src={Spotify} alt="spotify account" />
                <img className="Social Dribbble" src={Dribbble} alt="dribbble account" />
            </div>
        </div>
    );
}

export default Me;