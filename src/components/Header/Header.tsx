import React, {useState} from 'react';
import classes from './Header.module.scss';
import {CardActionTypes} from "../../types/card";
import {useDispatch} from "react-redux";
import { Select } from 'antd';

const Header = () => {
    const dispatch = useDispatch();
    const { Option } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
        dispatch({type: CardActionTypes.FILTER_DATA, payload: value});
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <h1 className={classes.header__title}>Ипотечный калькулятор <a>в Москве</a></h1>
                <div className={classes.form__row}>
                    <div className={classes.form__column}>
                        <p className={classes.form__title}>Цель ипотеки</p>
                        <Select onChange={handleChange} defaultValue="Любая" style={{ width: 280 }}>
                            <Option value="ANY">Любая</Option>
                            <Option value="Квартира или доля">Квартира или доля</Option>
                            <Option value="Загородная недвижимость">Загородная недвижимость</Option>
                            <Option value="Новостройка">Новостройка</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;