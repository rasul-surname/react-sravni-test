import React from 'react';
import classes from './Header.module.scss';
import {CardActionTypes} from "../../types/card";
import {useDispatch} from "react-redux";
import SelectComponent from "../Select/Select";

const Header = () => {
    const dispatch = useDispatch();
    const filterList = [
        {value: 'ANY'},
        {value: 'Квартира или доля'},
        {value: 'Загородная недвижимость'},
        {value: 'Новостройка'},
    ]

    function handleChange(value: any) {
        dispatch({type: CardActionTypes.FILTER_DATA, payload: value});
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h1 className={classes.header__title}>Ипотечный калькулятор <a>в Москве</a></h1>
                <div className={classes.form__row}>
                    <div className={classes.form__column}>
                        <p className={classes.form__title}>Цель ипотеки</p>
                        <SelectComponent onChange={handleChange} filterList={filterList} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;