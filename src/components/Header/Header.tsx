import React from 'react';
import classes from './Header.module.scss';
import SelectComponent from "../Select/Select";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Header = () => {
    const {targetList, targetPath, priceList, pricePath} = useTypedSelector(state => state.card);

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h1 className={classes.title}>Ипотечный калькулятор <a>в Москве</a></h1>
                <div className={classes.form__column}>
                    <SelectComponent title="Цель ипотеки" filterList={targetList} path={targetPath} />
                    <SelectComponent title="Стоимость недвижимости" filterList={priceList} path={pricePath} />
                </div>
            </div>
        </div>
    );
};

export default Header;