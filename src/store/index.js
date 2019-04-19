import {createStore,applyMiddleware} from 'redux';
import reduxThunk from "redux-thunk";
import {combineReducers} from "redux-immutable";
import Home from "./reducers/home"
// 模块化使用的地方
const reducer = combineReducers({
    Home
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;