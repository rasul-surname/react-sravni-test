import {CardAction, CardActionTypes, CardState} from "../../types/card";

const initialState: CardState = {
    cards: [],
    loading: false,
    error: null,
}

export const cardReducer = (state = initialState, action: CardAction): CardState => {
    switch (action.type) {
        case CardActionTypes.FETCH_CARDS:
            return {
                loading: true,
                error: null,
                cards: [],
            }
        case CardActionTypes.FETCH_CARDS_SUCCESS:
            return {
                loading: false,
                error: null,
                cards: action.payload,
            }
        case CardActionTypes.FETCH_CARDS_ERROR:
            return {
                loading: false,
                error: action.payload,
                cards: [],
            }
        default:
            return state;
    }
}