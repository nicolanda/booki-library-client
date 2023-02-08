import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import {
  addToCart,
  decreaseCartItemCount
} from '../../features/cartSlice';

export const ButtonInput = ({ data, icon, action }) => {
  const dispatch = useDispatch();

  const chooseIcon = {
    less: <RemoveCircleOutlineIcon fontSize="medium" />,
    pluss: <AddCircleOutlineIcon fontSize="medium" />
  };

  const decreaseItem = (data) => {
    console.log('decrease item button');
    dispatch(decreaseCartItemCount(data));
  };

  const increaseItem = (data) => {
    console.log('increase item button');
    dispatch(addToCart(data));
  };

  const handleClick = (action, data) => {
    switch (action) {
      case 'less': {
        decreaseItem(data);
        break;
      }
      case 'pluss':
        increaseItem(data);
        break;
    }
  };

  return (
    <IconButton onClick={() => handleClick(action, data)}>
      {chooseIcon[icon]}
    </IconButton>
  );
};
