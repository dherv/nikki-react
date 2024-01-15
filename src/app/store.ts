import createSagaMiddleware from 'redux-saga';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import dailyReducer from '../features/daily/dailySlice';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    dailies: dailyReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true })
      .concat(sagaMiddleware)
      .concat(apiSlice.middleware),
});

sagaMiddleware.run(watcherSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
