import {combineReducers} from "redux";
import {cardReducer} from "./cardReducer";

export const rootReducer = combineReducers({
    card: cardReducer,
})

export type RootState = ReturnType<typeof rootReducer>;