import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';

export const ButtonInput = ({ icon, action }) => {
  const chooseIcon = {
    less: <RemoveCircleOutlineIcon fontSize="medium" />,
    pluss: <AddCircleOutlineIcon fontSize="medium" />
  };

  return <IconButton onClick={action}>{chooseIcon[icon]}</IconButton>;
};
