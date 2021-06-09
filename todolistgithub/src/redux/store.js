import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddlewear from "redux-thunk" ;
import todoMap from "./reducers/todoMap";

const reducers = combineReducers({todos:todoMap})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunkMiddlewear)
));

window.__store__=store;

export default store;