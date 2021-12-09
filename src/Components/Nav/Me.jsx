import React from 'react';
import { Fragment } from 'react';
import MyImg from '../assists/me.png';

const Me = () => {
    return(
        <Fragment>
            <img className="Me" src={MyImg} alt="my img" />
        </Fragment>
    );
}

export default Me;