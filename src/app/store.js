import { configureStore } from '@reduxjs/toolkit';
import authorReducer from '../features/author/authorSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authorApi } from '../services/api/books/authorApi';
import { categoryApi } from '../services/api/books/categoryApi';

export const store = configureStore({
  reducer: {
    authors: authorReducer,
    [authorApi.reducerPath]: authorApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authorApi.middleware)
      .concat(categoryApi.middleware)
});

setupListeners(store.dispatch);
