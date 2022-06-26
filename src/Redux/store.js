
import { combineReducers, legacy_createStore } from "redux";
import { reducer }   from "../Redux/App/reducer";
import {reducer as AuthReducer } from "../Redux/Auth/reducer";

const rootReducer = combineReducers({ reducer,AuthReducer})

const logger1=(store) => next => action =>{
    return next(action)
}
const store=legacy_createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export {store}