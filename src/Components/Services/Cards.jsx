import React from 'react';
import Money from '../assists/money.png';
import Laptop from '../assists/laptop.png';
import Bulb from '../assists/light-bulb.png';

const Cards = () => {
    return(
        <div className="Cards">
            <div data-aos="fade-down" className="firstCard">
                <img src={Money} alt="icon of firstcard" />
                <span>Money Producter</span>
                <p>Discover More {'>>>'}</p>
            </div>
            <div data-aos="fade-down" className="secondCard">
                <img src={Laptop} alt="icon of secondcard" />
                <span>Money Producter</span>
                <p>Discover More {'>>>'}</p>
            </div>
            <div data-aos="fade-down" className="thirdCard">
                <img src={Bulb} alt="icon of secondcard" />
                <span>Money Producter</span>
                <p>Discover More {'>>>'}</p>
            </div>
        </div>
    );
}

export default Cards;