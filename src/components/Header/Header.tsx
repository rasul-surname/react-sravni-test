import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h1 className={classes.header__title}>Ипотечный калькулятор <a>в Москве</a></h1>
            </div>
        </div>
    );
};

export default Header;