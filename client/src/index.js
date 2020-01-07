import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
 
// invoking browser history function to get browser routing history from the web
const history = createBrowserHistory();

// importing index reducer from store for redux state management
import allReducers from './store';

// declaring and creating store (state management)
const store = createStore(allReducers, applyMiddleware(thunk));

ReactDOM.render(
  <Router history={ history }>
    <Provider store={ store }>
      <App />
    </Provider>
  </Router>
, document.getElementById("App"));