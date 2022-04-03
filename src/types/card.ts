export interface CardState {
    cards: any[];
    loading: boolean;
    error: null | string;
    countCards?: number | undefined;
}

export enum CardActionTypes {
    FETCH_CARDS = "FETCH_CARDS",
    FETCH_CARDS_SUCCESS = "FETCH_CARDS_SUCCESS",
    FETCH_CARDS_ERROR = "FETCH_CARDS_ERROR",
    SORT_DATA = "SORT_DATA",
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

export type CardAction = FetchCardsAction | FetchCardsSuccessAction | FetchCardsErrorAction | SortCardsAction;