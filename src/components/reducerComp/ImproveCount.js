import { useReducer } from 'react';
import {
  countInitialState,
  countReducer
} from '../../reducers/countReducer';
import { ButtonAddToCart } from '../cart/ButtonAddCart';
import { ButtonInput } from '../cart/ButtonInput';

export const ImproveCount = () => {
  const [state, dispatch] = useReducer(
    countReducer,
    countInitialState
  );

  const sumar = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const restar = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const typeCount = ({ target }) => {
    dispatch({ type: 'TYPECOUNT', payload: Number(target.value) });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Contador</h2>
      <nav>
        <ButtonInput icon="less" action={restar} />
        <button onClick={restar}>-1</button>
        <button onClick={reset}>reset</button>
        <button onClick={sumar}>+1</button>
        <ButtonInput icon="more" action={sumar} />
      </nav>
      <input
        type="number"
        value={state.contador}
        onChange={typeCount}
      />
      <h3>{state.contador}</h3>
    </div>
  );
};
