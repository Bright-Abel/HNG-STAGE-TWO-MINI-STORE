import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return initialState;
    },
    addItem: (state, action) => {
      const product = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.amount * product.price;
      cartSlice.caseReducers.calculateTotals(state);
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((i) => i.cartID === cartID);
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);

      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    editItem: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === id);

      state.numItemsInCart += amount - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      // state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal;
      // localStorage.setItem('cart', JSON.stringify(state));
    },
    toggleCart: (state, action) => {
      const { value, id } = action.payload;
      state.cartItems = state.cartItems
        .map((item) => {
          let newAmt = item.amount; // Initialize newAmt with current amount
          if (item.cartID === id) {
            if (value === 'inc') {
              newAmt = item.amount + 1;
              state.numItemsInCart += 1;
              state.cartTotal += item.price;
            } else if (value === 'dec') {
              newAmt = item.amount - 1;
              state.numItemsInCart -= 1;
              state.cartTotal -= item.price;
            }
            return { ...item, amount: newAmt };
          } else {
            return item;
          }
        })
        .filter((item) => item.amount > 0); // Remove items with amount < 1
    },

    zeroCartDel: (state) => {
      const tempCart = state.cartItems.filter((item) => item.amount > 0);
      return { ...state, cartItems: tempCart };
    },
  },
});

export const {
  clearCart,
  addItem,
  removeItem,
  editItem,
  calculateTotals,
  toggleCart,
  zeroCartDel,
} = cartSlice.actions;

export default cartSlice.reducer;
