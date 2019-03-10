import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as serviceWorker from './serviceWorker';
import { setColorValue } from  '../src/reducers'; 
import { createLogger } from 'redux-logger'
const logger = createLogger();
const store = createStore(setColorValue, applyMiddleware(logger));
ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
                , document.getElementById('react-root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
