import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchCards} from "./card";

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
        <div>
            {cards.map((item) => {
                return <h1>{item.name}</h1>
            })}
        </div>
    );
};

export default CardList;