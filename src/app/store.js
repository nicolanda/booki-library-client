import { configureStore } from '@reduxjs/toolkit';
import authorReducer from '../features/author/authorSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { bookiApi } from '../services/api/books/BookiApi';

export const store = configureStore({
  reducer: {
    authors: authorReducer,
    [bookiApi.reducerPath]: bookiApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookiApi.middleware)
});

setupListeners(store.dispatch);
