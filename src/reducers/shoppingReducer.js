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
    case TYPES.REMOVE_ONE_FROM_CART:
      return {};
    case TYPES.REMOVE_ALL_FROM_CART:
      return {};
    case TYPES.CLEAR_CART:
      return {};
    default:
      return state;
  }
};
