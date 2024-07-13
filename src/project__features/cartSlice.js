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
      console.log(item);
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
      const tempData = state.cartItems.map((item) => {
        let newAmt = item.amount; // Initialize newAmt with current amount
        if (item.cartID === id) {
          if (value === 'inc') {
            newAmt = item.amount + 1;
            cartSlice.caseReducers.calculateTotals(state);
          } else if (value === 'dec') {
            newAmt = item.amount - 1;
            if (newAmt < 1) {
              newAmt = 1;
              cartSlice.caseReducers.calculateTotals(state);
            }
          }
          return { ...item, amount: newAmt };
        } else {
          return item;
        }
      });
      state.cartItems = tempData; // Update state directly
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
} = cartSlice.actions;

export default cartSlice.reducer;
