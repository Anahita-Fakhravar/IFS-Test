
//Redux store settings

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);
export { store };
