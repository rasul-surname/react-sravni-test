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
                loading: true,
                error: null,
                cards: [],
            }
        case CardActionTypes.FETCH_CARDS_SUCCESS:
            return {
                loading: false,
                error: null,
                cards: action.payload,
                visibleCards: action.payload,
            }
        case CardActionTypes.FETCH_CARDS_ERROR:
            return {
                loading: false,
                error: action.payload,
                cards: [],
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

        default:
            return state;
    }
}