import { legacy_createStore as createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import pageReducer from '../reducers/pageReducer';

const rootReducer = combineReducers({
  pageReducer: pageReducer
});

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
}

export default configureStore;
