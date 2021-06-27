import React from 'react';

import foodImage from '../../assets/images/bg1.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Foodies</h1>
                {/* <button>Cart</button> */}
                <HeaderCartButton/>
            </header>
            <div className={classes['main-image']}>
                <img src={foodImage} alt="Food"/>
            </div>
        </React.Fragment>
    )
}

export default Header
