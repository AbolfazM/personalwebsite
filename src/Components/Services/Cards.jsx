import React from 'react';
import Money from '../assists/money.png';
import Laptop from '../assists/laptop.png';
import Bulb from '../assists/light-bulb.png';

const Cards = () => {
    return(
        <div className="Cards">
            <div className="firstCard">
                <img src={Money} alt="icon of firstcard" />
            </div>
            <div className="secondCard">
                <img src={Laptop} alt="icon of secondcard" />
            </div>
            <div className="thirdCard">
                <img src={Bulb} alt="icon of secondcard" />
            </div>
        </div>
    );
}

export default Cards;