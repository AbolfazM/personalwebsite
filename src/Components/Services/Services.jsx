import React, {Fragment} from 'react';
import Shoppify from '../assists/shopping.png';

const Services = () => {
    return(
        <Fragment>
            <div className="Service">
                <div className="Service__Icons">
                    <span>facebook</span>
                    <span>Google</span>
                    <img src={Shoppify} alt="shopping service" />
                    <span>tumblr.</span>
                </div>
            </div>
        </Fragment>
    );
}

export default Services;