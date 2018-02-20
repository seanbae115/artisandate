import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import promise from "redux-promise";
import rootReducer from "./reducers"

import App from './components/app/app';

const store = createStore(rootReducer, {}, applyMiddleware(promise));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
