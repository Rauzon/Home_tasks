import {loadingReducer, LoadingStateType} from "./loadingReducer";
import { combineReducers, createStore } from "redux";

//type
export type AppStoreType = ReturnType<typeof reducers>

const reducers = combineReducers({
    loading: loadingReducer,

});

export const store = createStore(reducers);



// // @ts-ignore
// window.store = store; // for dev
