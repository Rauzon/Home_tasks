import {loadingReducer, LoadingStateType} from "./loadingReducer";
import { combineReducers, createStore } from "redux";
import { themeReducer } from "../../h12/bll/themeReducer";

//type
export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,

});

export const store = createStore(reducers);



// // @ts-ignore
// window.store = store; // for dev
