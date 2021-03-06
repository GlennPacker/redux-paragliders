
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // support for redux dev tools

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant(), logger))
    );
}