import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.itemQuantity++;
      } else {
        state.cartItems.push({
          ...newItem,
          itemQuantity: 1
        });
      }
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartitem) => cartitem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },
    modifyCartItemCount(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].itemQuantity =
        action.payload.itemQuantity;
    },
    decreaseCartItemCount(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        state.cartItems[itemIndex].itemQuantity = 1;
      }
    }
  }
});

export const {
  addToCart,
  modifyCartItemCount,
  removeFromCart,
  decreaseCartItemCount
} = cartSlice.actions;
export default cartSlice.reducer;
