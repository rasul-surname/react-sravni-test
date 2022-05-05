import React from 'react';

import {Link, useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

import classes from './Page.module.scss';
import Card from "../CardList/Card/Card";
import Button from "../Button/Button";

const PageCard = () => {
    const { visibleCards } = useTypedSelector(state => state.card);
    const { id } = useParams<{id: any}>();

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {visibleCards.slice(id, Number(id) + 1).map((item: any, index: number) => {
                    return (
                        <div>
                            <Card index={index} item={item} btnVisible={false} />
                            <Link to={`/react-sravni-test`} className={classes.btn}>
                                <Button value="Вернуться назад" />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default PageCard;