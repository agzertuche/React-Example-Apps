import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import * as redux from 'redux';
//import * as redux from 'redux';
//import thunk from 'redux-thunk';
var ReduxThunk = require('redux-thunk').default;
import { searchTextReducer, showCompletedReducer, todosReducer, authReducer } from 'reducers';

 export var configure = (initialState = {}) => {
    var reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer,
        auth: authReducer
    }); 

    // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    // const store = createStore(
    //     reducer, 
    //     initialState, 
    //     composeEnhancers(applyMiddleware(thunk))
    //     );

var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(ReduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

    return store;
};