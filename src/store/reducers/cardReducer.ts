import {CardAction, CardActionTypes, CardState} from "../../types/card";

const initialState: CardState = {
    cards: [],
    visibleCards: [],
    loading: false,
    error: null,
    countCards: 10,
}

export const cardReducer = (state = initialState, action: CardAction): CardState => {
    switch (action.type) {
        case CardActionTypes.FETCH_CARDS:
            return {
                ...state,
                loading: true,
            }
        case CardActionTypes.FETCH_CARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                cards: action.payload,
                visibleCards: action.payload,
            }
        case CardActionTypes.FETCH_CARDS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case CardActionTypes.SORT_DATA:
            return {
                ...state,
                visibleCards: action.payload,
            }
        case CardActionTypes.FILTER_DATA:
            switch (action.payload) {
                case 'ANY':
                    return {
                        ...state,
                        visibleCards: state.cards,
                    }
                case action.payload:
                    return {
                        ...state,
                        visibleCards: state.cards.filter((item) => {
                            return item.name == action.payload;
                        }),
                    }
                default:
                    return {
                        ...state,
                        visibleCards: state.cards,
                    };
            }
        case CardActionTypes.SHOW_ALL_CARDS:
            let result = state.countCards <= state.visibleCards.length ? undefined : '';
            return {
                ...state,
                countCards: result,
            }
        default:
            return state;
    }
}