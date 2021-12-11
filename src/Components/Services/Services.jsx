import React, {Fragment} from 'react';
import Shoppify from '../assists/shopping.png';
import Items from './Items';

const Services = () => {
    return(
        <Fragment>
            <div className="Service">
                <div className="Service__Icons">
                    <span>facebook</span>
                    <span>Google</span>
                    <img className="Shoppify" src={Shoppify} alt="shopping service" />
                    <span>Shopiffy</span>
                    <span>tumblr.</span>
                </div>
                <div>
                    <Items />
                </div>
            </div>
        </Fragment>
    );
}

export default Services;