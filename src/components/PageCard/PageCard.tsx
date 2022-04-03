import React from 'react';

import {Link, useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import classes from './Page.module.scss';

const PageCard = () => {
    const { cards } = useTypedSelector(state => state.card);
    const { id } = useParams<{id: any}>();

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {cards.slice(id, Number(id) + 1).map((item, index) => {
                    return (
                        <div>
                            <div>
                                <img src={item.organization.logo} alt={item.organization.name} />
                            </div>
                            <div>
                                <p>{item.name}</p>
                            </div>
                            <div>
                                <p>Возвраст от {item.customerRequirements.age} лет</p>
                                <p>{item.customerRequirements.documents} документа</p>
                            </div>
                            <div>
                                <Link to={`/react-sravni-test`}>
                                    <button className={classes.card__btn}>Вернуться назад</button>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PageCard;