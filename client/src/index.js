import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers'
import App from "./containers/App";
import './App.css';
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer,applyMiddleware(
    thunkMiddleware
));



ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));