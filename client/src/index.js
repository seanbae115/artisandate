import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import promise from "redux-promise";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";
import types from '../src/actions/types';

import App from './components/app/app';

const store = createStore(rootReducer, {}, applyMiddleware(promise, thunk));

if(localStorage.getItem('token')){
    store.dispatch({
        type: types.SIGN_IN
    });
}

ReactDOM.render(
    <Provider store={store}>
          <Router>
              <App />
          </Router>
    </Provider>,
    document.getElementById('root')
);
