import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from '@/reset';
// 让全局都能使用redux，不需要再引入单独store
import {Provider} from "react-redux";
import store from '@/store'
import "./mock"
ReactDOM.render(
    <Provider store={store}>
        <App />
        <GlobalStyle/>
    </Provider>
    , document.getElementById('root'));

