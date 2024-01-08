import {configureStore} from '@reduxjs/toolkit';
import {mockApi} from './mockapi/mock.api';

const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware),
});

export default store;
