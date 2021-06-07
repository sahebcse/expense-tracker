import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer'
import App from './app'

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));