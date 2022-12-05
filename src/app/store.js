import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { bookiApi } from '../services/api/books/BookiApi';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [bookiApi.reducerPath]: bookiApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookiApi.middleware)
});

setupListeners(store.dispatch);
