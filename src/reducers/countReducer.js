import { TYPES } from '../actions/contadorActions';

export const countInitialState = {
  contador: 1
};

// export const countInit = (countInitialState) => {
//   return {
//     contador: countInitialState.contador + 100
//   };
// };

export const countReducer = (state, action) => {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.DECREMENT:
      if (state.contador > 1) {
        return { contador: state.contador - 1 };
      }
      return state;
    case TYPES.TYPECOUNT: {
      return { contador: action.payload };
    }
    case TYPES.RESET:
      return { contador: 1 };
    default:
      return state;
  }
};
