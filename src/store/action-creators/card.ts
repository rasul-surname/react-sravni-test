import {CardAction, CardActionTypes} from "../../types/card";
import {Dispatch} from "redux";


export const fetchCards = () => {
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            const response = await fetch("http://localhost:3001/data");
            const payload = await response.json();;
            setTimeout(() => {
                dispatch({
                    type: CardActionTypes.FETCH_CARDS_SUCCESS,
                    payload: payload,
                });
            }, 1000)
        } catch (e) {
            dispatch({
                type: CardActionTypes.FETCH_CARDS_ERROR,
                payload: 'Произошла ошибка при загрузке данных'
            });
        }
    }
}