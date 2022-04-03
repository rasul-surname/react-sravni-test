import React, {useEffect, useState} from 'react';

import {useDispatch} from "react-redux";
import {fetchCards} from "../../store/action-creators/card";

import Card from "./Card/Card";

import classes from './CardList.module.scss';

import {useTypedSelector} from "../../hooks/useTypedSelector";
import {CardActionTypes} from "../../types/card";

const CardList: React.FC = () => {
    const {cards, loading, error, countCards} = useTypedSelector(state => state.card);
    const [countPosts, setCountPosts] = useState(countCards);
    const [flag, setFlag] = useState(false);
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

    function sortData(name: string) {
        const copyCards = cards.concat();

        if(name === 'sum') {
            copyCards.sort((a, b) => a['rate'].creditAmount.from > b['rate'].creditAmount.from ? 1 : -1);
            setFlag(!flag);
            dispatch({type: CardActionTypes.SORT_DATA, payload: copyCards});
        }

        if(name === 'rate') {
            copyCards.sort((a, b) => a['rate'].periods[0].rate.from > b['rate'].periods[0].rate.from ? 1 : -1);
            setFlag(!flag);
            dispatch({type: CardActionTypes.SORT_DATA, payload: copyCards});
        }
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.sort}>Сортировать:
                    &#160;&#160;
                    <button
                        style={{background: "none", border: "none"}}
                        onClick={() => sortData('rate')}
                        disabled={flag}
                    >
                        по ставке
                    </button>
                    &#160;&#160;
                    <button
                        style={{background: "none", border: "none"}}
                        onClick={() => sortData('sum')}
                        disabled={!flag}
                    >
                        по сумме
                    </button>
                </div>
                {cards.slice(0, countPosts).map((item, index) => {
                    return <Card item={item} index={index} />
                })}
            </div>
            {countPosts ? <button className={classes.btn} onClick={showAllCards}>Показать ещё</button> : ''}
        </div>
    );
};

export default CardList;