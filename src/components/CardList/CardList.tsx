import React, {useEffect, useState} from 'react';

import {useDispatch} from "react-redux";
import {fetchCards} from "../../store/action-creators/card";

import Card from "./Card/Card";

import classes from './CardList.module.scss';

import {useTypedSelector} from "../../hooks/useTypedSelector";

const CardList: React.FC = () => {
    const {cards, loading, error} = useTypedSelector(state => state.card);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, []);

    if(loading) {
         return <h1>Идет загрузка...</h1>
    }
    if(error) {
         return <h1>{error}</h1>
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {cards.map((item, index) => {
                    return <Card item={item} index={index} />
                })}
            </div>
        </div>
    );
};

export default CardList;