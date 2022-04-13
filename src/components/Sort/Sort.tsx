import React, {useState} from 'react';
import classes from "../CardList/CardList.module.scss";
import {CardActionTypes} from "../../types/card";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";

const Sort = () => {
    const {visibleCards} = useTypedSelector(state => state.card);
    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();

    function sortData(name: string) {
        const copyCards = visibleCards.concat();

        if(name === 'sum') {
            copyCards.sort((a: any, b: any) => a['rate'].creditAmount.from - b['rate'].creditAmount.from);
            setFlag(!flag);
        }
        if(name === 'rate') {
            copyCards.sort((a: any, b: any) => a['rate'].periods[0].rate.from - b['rate'].periods[0].rate.from);
            setFlag(!flag);
        }

        dispatch({type: CardActionTypes.SORT_DATA, payload: copyCards});
    }

    return (
        <div className={classes.sort}>Сортировать:
            &#160;&#160;
            <button
                style={{background: "none", border: "none", opacity: flag ? "1" : "0.5"}}
                onClick={() => sortData('rate')}
                disabled={flag}
            >
                по ставке
            </button>
            &#160;&#160;
            <button
                style={{background: "none", border: "none", opacity: flag ? "0.5" : "1"}}
                onClick={() => sortData('sum')}
                disabled={!flag}
            >
                по сумме
            </button>
        </div>
    );
};

export default Sort;