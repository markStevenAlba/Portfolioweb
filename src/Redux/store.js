import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './reducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    combineReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
         )
);

// const store = {}

export default store;


