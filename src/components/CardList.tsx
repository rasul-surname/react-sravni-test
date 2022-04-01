import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const CardList: React.FC = () => {
   const {cards, loading, error} = useTypedSelector(state => state.card);

    return (
        <div></div>
    );
};

export default CardList;