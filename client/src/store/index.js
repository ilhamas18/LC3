import { createStore, applyMiddleware } from 'redux';
import logger from './middleware/logger';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default store;