import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga/rootSaga';
import userReducer from './reducers/index';


const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  user:userReducer
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

const store = configureStore({
  reducer,
  middleware: [...customizedMiddleware, sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;