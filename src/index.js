import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';
import counterReducer, {inc, dec} from './store/counter';
import toDosReducer, {newToDo, toggleToDo, removeToDo}  from './store/todos';

//Store

let store = createStore(combineReducers({
    counter: counterReducer,
    toDos: toDosReducer
}),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    );


store.dispatch(newToDo("Shopping"))  
store.dispatch(toggleToDo(2))
store.dispatch({type: "ADD_TODO", text: "Afdgftgf"}) 
window.inc = () => store.dispatch(inc())
window.dec =()=> store.dispatch(dec())
window.addtodo = (text) => store.dispatch(newToDo(text))
window.toggle = (id) => store.dispatch(toggleToDo(id))
window.remove = (id) => store.dispatch(removeToDo(id))

console.log(store.getState());


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root')
);


