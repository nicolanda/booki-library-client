import { TextField } from '@mui/material';

export const FormInputText = ({
  state,
  setState,
  id,
  type,
  label,
  variant,
  size,
  reg,
  tam
}) => {
  const onChange = (e) => {
    setState({ ...state, field: e.target.value });
  };

  const validation = () => {
    if (reg) {
      if (reg.test(state.field)) {
        console.log('valido');
      } else {
        console.log('invalido');
      }
    }
  };

  return (
    <TextField
      id={id}
      value={state.field}
      type={type}
      label={label}
      variant={variant}
      size={size}
      sx={{ width: tam }}
      onChange={onChange}
      onKeyUp={validation}
      onBlur={validation}
    />
  );
};
