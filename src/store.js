import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './project__features/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
