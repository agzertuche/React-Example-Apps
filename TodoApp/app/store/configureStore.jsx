import { combineReducers, createStore, compose } from 'redux';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

 export var configure = (initialState = {}) => {
    var reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    }); 

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, initialState, composeEnhancers());

    return store;
};