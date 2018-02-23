import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import promise from "redux-promise";
import thunk from 'redux-thunk';
import rootReducer from "./reducers"

import App from './components/app/app';

const store = createStore(rootReducer, {}, applyMiddleware(promise, thunk));

ReactDOM.render(
    <Provider store={store}>
          <Router>
              <App />
          </Router>
    </Provider>,
    document.getElementById('root')
);
