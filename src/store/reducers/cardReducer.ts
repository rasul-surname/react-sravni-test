import {CardAction, CardActionTypes, CardState} from "../../types/card";

const initialState: CardState = {
    cards: [],
    visibleCards: [],
    loading: false,
    error: null,
    countCards: 10,
    targetList: [
        {value: 'Любая'},
        {value: 'Квартира или доля'},
        {value: 'Загородная недвижимость'},
        {value: 'Новостройка'},
    ],
    targetPath: 'name',
    priceList: [
        {value: 'Любая'},
        {value: '300000'},
        {value: '7000000'},
        {value: '500000'},
        {value: '600000'},
    ],
    pricePath: 'rate.creditAmount.from',
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
            switch (action.payload.value) {
                case 'Любая':
                    return {
                        ...state,
                        visibleCards: state.cards,
                    }
                case action.payload.value:
                    return {
                        ...state,
                        visibleCards: state.cards.filter((item) => {
                            let result = action.payload.path.split('.').reduce((acc: any, elem: any) => {
                                if(acc === null) {
                                    return item[elem];
                                }
                                return acc[elem];
                            }, null);

                            return result == action.payload.value;
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