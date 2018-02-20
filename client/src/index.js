import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import promise from "redux-promise";
import rootReducer from "./reducers"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/app/app';

const store = createStore(rootReducer, {}, applyMiddleware(promise));

ReactDOM.render(
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
