import { TYPES } from '../actions/shoppingActions';
import { booksData } from '../utilities/rawData';

export const shoppingInitialState = {
  products: booksData,
  cart: []
};

export const shoppingReducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cart: [...state.cart, newItem]
      };
    }
    default:
      return state;
  }
};
