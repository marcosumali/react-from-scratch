import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// // SAGA
import createSagaMiddleware from 'redux-saga';
// // THUNK
// import thunk from 'redux-thunk';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootSaga from './sagas';
// import firebaseConfig from './configs/firebase.config';
import './App.css';
 
// invoking browser history function to get browser routing history from the web
const history = createBrowserHistory();

// importing index reducer from store for redux state management
import allReducers from './store';

// declaring and creating store (state management)
// THUNK
// const store = createStore(
//   allReducers, 
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebaseConfig),
//     reactReduxFirebase(firebaseConfig)
//   )
// );
// SAGA
const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Router history={ history }>
    <Provider store={ store }>
      <App />
    </Provider>
  </Router>
, document.getElementById("App"));