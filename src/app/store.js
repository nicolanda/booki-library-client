import { configureStore } from '@reduxjs/toolkit';
import authorReducer from '../features/author/authorSlice';

export const store = configureStore({
  reducer: {
    authors: authorReducer
  }
});
