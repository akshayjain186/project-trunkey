import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'; 
import rootReducer from './rootReducer';

/**
 * Configure and export the Redux store with saga middleware.
 */
const sagaMiddleware = createSagaMiddleware(); // Create saga middleware

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga); // Run the root saga after the store is configured

export default store;
