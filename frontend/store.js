import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root_reducer';

export default createStore(rootReducer)
