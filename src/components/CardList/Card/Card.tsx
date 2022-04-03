import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Card.module.scss";

interface InterfaceCard {
    index: number;
    item: any;
}

const Card: React.FC<InterfaceCard> = ({index, item}) => {

    function prettify (num: number) {
        let n = num.toString();
        let separator = " ";
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator) + ' ₽';
    }

    return (
        <div key={index} className={classes.card}>
            <div>
                <img src={item.organization.logo} alt={item.organization.name} />
            </div>
            <div>
                <p className={classes.floatingRate}>{item.rate.periods[0].rate.from} %</p>
                <p>{item.name}</p>
            </div>
            <div>
                <p className={classes.rate}>
                    {item.rate.creditAmount.to ?
                        prettify(item.rate.creditAmount.from) + ' - ' + prettify(item.rate.creditAmount.to)
                        :
                        prettify(item.rate.creditAmount.from)
                    }
                </p>
            </div>
            <div>
                <p>Возвраст от {item.customerRequirements.age} лет</p>
                <p>{item.customerRequirements.documents} документа</p>
            </div>
            <div>
                <Link to={`page/${(index)}`}>
                    <button className={classes.card__btn}>Перейти на сайт</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;