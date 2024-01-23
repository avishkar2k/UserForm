import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import pageReducer from '../reducers/pageReducer';

const rootReducer = combineReducers(
    { pageList: pageReducer }
);

const configureStore = () => {
    const middleware = applyMiddleware(reduxPromiseMiddleware, thunk, lo);
    const store = createStore(rootReducer, middleware);
    return store
}

export default configureStore;