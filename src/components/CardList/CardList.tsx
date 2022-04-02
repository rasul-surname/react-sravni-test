import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchCards} from "../../store/action-creators/card";
import classes from './CardList.module.scss';

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

    function prettify (num: number) {
        let n = num.toString();
        let separator = " ";
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator) + ' ₽';
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {cards.map((item, index) => {
                    return (
                        <div key={index} className={classes.card}>
                            <div>
                                <img src={item.organization.logo} alt={item.organization.name} />
                            </div>
                            <div>
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <h4>
                                    {item.rate.creditAmount.to ?
                                        prettify(item.rate.creditAmount.from) + ' - ' + prettify(item.rate.creditAmount.to)
                                        :
                                        prettify(item.rate.creditAmount.from)
                                    }
                                </h4>
                            </div>
                            <div>
                                <p>Возвраст от {item.customerRequirements.age} лет</p>
                                <p>{item.customerRequirements.documents} документа</p>
                            </div>
                            <div>
                                <a href="">
                                    <button className={classes.card__btn}>Перейти на сайт</button>
                                </a>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    );
};

export default CardList;