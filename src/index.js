import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {createStore} from 'redux';

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

const counterReducer = (state = 0, action) => {

    switch(action.type) {
        case INCREMENT_COUNTER:
        return state + 1
        case DECREMENT_COUNTER:
        return state - 1
        default:
        return state
    }
}

let store = createStore(counterReducer);

store.dispatch({type: INCREMENT_COUNTER})
store.dispatch({type: DECREMENT_COUNTER})
store.dispatch({type: DECREMENT_COUNTER})

console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));


