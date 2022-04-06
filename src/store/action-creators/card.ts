import {CardAction, CardActionTypes} from "../../types/card";
import {Dispatch} from "redux";
import payload from './data';

export const fetchCards = () => {
    return async (dispatch: Dispatch<CardAction>) => {
        try {
            // Вызов через json-server + задержка для эмуляции работы сервера
            // const response = await fetch("http://localhost:3001/data");
            // const payload = await response.json();
            // setTimeout(() => {
            //     dispatch({
            //         type: CardActionTypes.FETCH_CARDS_SUCCESS,
            //         payload: payload,
            //     });
            // }, 1000);

            // Вызов через статичный файл + задержка для эмуляции работы сервера
            dispatch({type: CardActionTypes.FETCH_CARDS});
            setTimeout(() => {
                    dispatch({
                        type: CardActionTypes.FETCH_CARDS_SUCCESS,
                        payload: payload,
                    });
                }, 1000);
        } catch (e) {
            dispatch({
                type: CardActionTypes.FETCH_CARDS_ERROR,
                payload: 'Произошла ошибка при загрузке данных'
            });
        }
    }
}