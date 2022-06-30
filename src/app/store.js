import { configureStore } from '@reduxjs/toolkit';
import notedReducer from '../features/NotedSlice';

export const store = configureStore({
  reducer: {
    noted : notedReducer
  },
});
