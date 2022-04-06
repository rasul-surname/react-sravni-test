export interface CardState {
    cards: any[];
    visibleCards?: any;
    loading: boolean;
    error: null | string;
    countCards?: any;
}

export enum CardActionTypes {
    FETCH_CARDS = "FETCH_CARDS",
    FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS",
    FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR",
    SORT_DATA = "SORT_DATA",
    FILTER_DATA = "FILTER_DATA",
    SHOW_ALL_CARDS = "SHOW_ALL_CARDS",
}

interface FetchCardsAction {
    type: CardActionTypes.FETCH_CARDS;
}
interface FetchCardsSuccessAction {
    type: CardActionTypes.FETCH_CARDS_SUCCESS;
    payload: any[];
}
interface FetchCardsErrorAction {
    type: CardActionTypes.FETCH_CARDS_ERROR;
    payload: string;
}
interface SortCardsAction {
    type: CardActionTypes.SORT_DATA;
    payload: any[];
}
interface FilterCardsAction {
    type: CardActionTypes.FILTER_DATA;
    payload: any;
}

interface ShowAllCardsAction {
    type: CardActionTypes.SHOW_ALL_CARDS;
}

export type CardAction = FetchCardsAction | FetchCardsSuccessAction | FetchCardsErrorAction | SortCardsAction | FilterCardsAction | ShowAllCardsAction;