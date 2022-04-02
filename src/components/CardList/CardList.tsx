import React, {useEffect, useState} from 'react';

import {useDispatch} from "react-redux";
import {fetchCards} from "../../store/action-creators/card";

import Card from "./Card/Card";

import classes from './CardList.module.scss';

import {useTypedSelector} from "../../hooks/useTypedSelector";

const CardList: React.FC = () => {
    const {cards, loading, error, countCards} = useTypedSelector(state => state.card);
    const [countPosts, setCountPosts] = useState(countCards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, [countPosts]);

    if(loading) {
         return <h1>Идет загрузка...</h1>
    }
    if(error) {
         return <h1>{error}</h1>
    }

    function showAllCards() {
        setCountPosts(undefined);
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {cards.slice(0, countPosts).map((item, index) => {
                    return <Card item={item} index={index} />
                })}
            </div>
            {countPosts ? <button className={classes.btn} onClick={showAllCards}>Показать ещё</button> : ''}
        </div>
    );
};

export default CardList;