import React, {useEffect, useState} from 'react';

import {useDispatch} from "react-redux";
import {fetchCards} from "../../store/action-creators/card";

import Card from "./Card/Card";

import classes from './CardList.module.scss';

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {CardActionTypes} from "../../types/card";
import Sort from "../Sort/Sort";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";

const CardList: React.FC = () => {
    const {cards, visibleCards, countCards} = useTypedSelector(state => state.card);
    const dispatch = useDispatch();

    useEffect(() => {
        if(cards.length == 0) {
            dispatch(fetchCards());
        }
    }, []);

    function showAllCards() {
        dispatch({type: CardActionTypes.SHOW_ALL_CARDS});
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <Sort />
                <Loader />
                {visibleCards.slice(0, countCards).map((item: any, index: number) => {
                    return <Card item={item} index={index} btnVisible={true} />
                })}
            </div>
            {countCards < visibleCards.length ? <Button className={classes.btn} onClick={showAllCards} value="Показать ещё" /> : ''}
        </div>
    );
};

export default CardList;