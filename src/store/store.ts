import {combineReducers, createStore, } from "redux";
import HeaderReducer from "./Reducers/HeaderReducer/HeaderReducer";


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const rootReducer = combineReducers({
	header: HeaderReducer
});

//type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never

//export type InferActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,composeEnhancers());
export default store;
